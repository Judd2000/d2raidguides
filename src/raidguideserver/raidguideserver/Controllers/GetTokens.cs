using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace raidguideserver.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GetTokens : ControllerBase
  {

    static readonly Uri endpoint = new(Environment.GetEnvironmentVariable("D2RG_BUNGIE_TOKEN_ENDPOINT") ?? "https://example.com");

    private static readonly HttpClient requestClient = new() { BaseAddress = endpoint };
    [HttpPost]
    public async Task<ActionResult<Token>> Post([FromBody] TokenRequest requestBody)
    {

      if (string.IsNullOrEmpty(requestBody.AuthCode) && string.IsNullOrEmpty(requestBody.RefreshToken))
      {
        return BadRequest("Either auth_code or refresh_token must be provided.");
      }

      string clientId = Environment.GetEnvironmentVariable("D2RG_CLIENT_ID") ?? "";

      string clientSecret = Environment.GetEnvironmentVariable("D2RG_CLIENT_SECRET") ?? "";

      Dictionary<string, string> keyValues = new() {
        { "client_id", clientId },
        { "client_secret", clientSecret }
      };

      if (!string.IsNullOrEmpty(requestBody.AuthCode))
      {
        keyValues.Add("code", requestBody.AuthCode);
        keyValues.Add("grant_type", "authorization_code");
      }
      else if (!string.IsNullOrEmpty(requestBody.RefreshToken))
      {
        keyValues.Add("refresh_token", requestBody.RefreshToken);
        keyValues.Add("grant_type", "refresh_token");
      }

      using HttpRequestMessage tokenReq = new(HttpMethod.Post, endpoint);

      tokenReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));

      tokenReq.Content = new FormUrlEncodedContent(keyValues);

      try
      {
        using HttpResponseMessage response = await requestClient.SendAsync(tokenReq);

        string body = await response.Content.ReadAsStringAsync();
        if (!response.IsSuccessStatusCode)
        {
          Console.Error.WriteLine($"Request failed with status {response.StatusCode}. Response: {body}");

          return BadRequest(new
          {
            message = "Failed to renew token",
            statusCode = response.StatusCode,
            statusLabel = response.StatusCode.ToString(),
            error = body
          });
        }

        Token? token = JsonSerializer.Deserialize<Token>(body);

        return token ?? new Token();
      }
      catch (HttpRequestException ex)
      {
        Console.Error.WriteLine($"System error: {ex}");
        return StatusCode(500, new { message = "An unexpected error occurred.", details = ex.Message });
      }
    }
  }

  [Route("api/[controller]")]
  [ApiController]
  public class GetData : ControllerBase
  {

    
    //private static readonly string[] allowedDomains = #
    //{ 
      // "dim.gg"
      // "destinyitemmanager.com"
      // "mobalytics..gg"
      // "youtube.com"
      // "youtu.be"
      // "light.gg"
   // }; 

    //private bool IsValidBuildLink(string rl)
    //{ 
        //if (string.IsNullOrWhiteSpace(Url))
          //return false; 
          
        //if (!Uri.tryCreate(url, UriKind.Absolute, out Uri uri))
          //return false; 

        //if (uri.Scheme != Uri.uriSchemeHttps)
          //return false; 

        //string host = uri.Host.ToLower();


        //return allowedDomains.Any(d => host.Contains(d));
        //}

        // add to handle comments == 
        // if (!IsValidBuildLink(comment.buildink))  
        //{
        //    return BadRequest("Only approved build links are allowed.");
        //}
    //}

    private static readonly uint ArmorHash = 20U;

    private static Dictionary<uint, string> categoryHashToName = new()
    {
        { ArmorHash, "Armor" },
        { 1U, "Weapon" },
        { 1043342778U, "Subclass Mods" }
    };


    static readonly Uri endpoint = new("https://www.bungie.net");

    private static readonly HttpClient requestClient = new() { BaseAddress = endpoint };

    private static readonly JsonSerializerOptions options = new()
    {
      PropertyNameCaseInsensitive = true
    };

    private static bool IsExoticArmor(JsonElement item)
    {
      return item.TryGetProperty("inventory", out JsonElement inventoryInfo) && 
        inventoryInfo.ValueKind == JsonValueKind.Object &&
        inventoryInfo.TryGetProperty("tierTypeName", out JsonElement tier) &&
        tier.GetString() == "Exotic";
    }

    private static Dictionary<string, List<DataItem>> PetesItemJson(string itemBody)
    {
      Dictionary<string, List<DataItem>> items = new() {
        { "Weapon", new List<DataItem>() },
        { "Armor", new List<DataItem>() },
        { "Subclass Mods", new List<DataItem>() }
      };

      Dictionary<string, JsonElement> itemDict = JsonSerializer.Deserialize<Dictionary<string, JsonElement>>(itemBody) ?? [];

      foreach (JsonElement item in itemDict.Values)
      {
        if (item.TryGetProperty("itemCategoryHashes", out JsonElement categoriesArray)
          && categoriesArray.ValueKind == JsonValueKind.Array)
        {

          foreach (JsonElement category in categoriesArray.EnumerateArray())
          {

            uint hash = category.GetUInt32();
            if (category.ValueKind != JsonValueKind.Number ||
              !categoryHashToName.ContainsKey(hash) ||
              (hash == ArmorHash && !IsExoticArmor(item)))
              continue;

            DataItem newItem = new();

            // Handle root properties
            if (item.TryGetProperty("itemTypeDisplayName", out var itemType)) newItem.ItemType = itemType.GetString() ?? "";
            if (item.TryGetProperty("flavorText", out var flavorText)) newItem.FlavorText = flavorText.GetString() ?? "";
            if (item.TryGetProperty("hash", out var hashCode)) newItem.Hash = hashCode.GetUInt32();

            // Handle nested display properties
            if (item.TryGetProperty("displayProperties", out var displayProperties))
            {
              if (displayProperties.TryGetProperty("name", out var name)) newItem.Name = name.GetString() ?? "";
              if (displayProperties.TryGetProperty("icon", out var iconUrl)) newItem.IconUrl = iconUrl.GetString() ?? "";
              if (displayProperties.TryGetProperty("description", out var description)) newItem.Description = description.GetString() ?? "";
            }

            string itemCategory = categoryHashToName.GetValueOrDefault(hash);
            newItem.ItemCategory = itemCategory;

            // Add property
            if (items.TryGetValue(itemCategory, out List<DataItem> itemList))
            {
              itemList.Add(newItem);
              continue;
            }
          }
        }
      }
      return items;
    }

    [HttpGet("manifestdata")]
    public async Task<ActionResult<Dictionary<string, List<DataItem>>>> GetDestinyManifestData()
    {

      string manifestEndpoint = "/Platform/Destiny2/Manifest/";

      using HttpRequestMessage manifestReq = new(HttpMethod.Get, manifestEndpoint);

      manifestReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));

      try
      {
        using HttpResponseMessage response = await requestClient.SendAsync(manifestReq);

        string body = await response.Content.ReadAsStringAsync();
        if (!response.IsSuccessStatusCode)
        {
          Console.Error.WriteLine($"Request failed with status {response.StatusCode}. Response: {body}");

          return BadRequest(new
          {
            message = "Failed to get destiny data",
            statusCode = response.StatusCode,
            statusLabel = response.StatusCode.ToString(),
          });
        }

        ManifestData manifest = JsonSerializer.Deserialize<ManifestData>(body, options) ?? new();


        if (manifest?.response?.jsonWorldComponentContentPaths?.en?.destinyInventoryItemDefinition != null)
        {
          using HttpRequestMessage itemsReq = new(HttpMethod.Get, manifest.response.jsonWorldComponentContentPaths.en.destinyInventoryItemDefinition);

          itemsReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));
          using HttpResponseMessage itemsResponse = await requestClient.SendAsync(itemsReq);

          string itemBody = await itemsResponse.Content.ReadAsStringAsync();

          return PetesItemJson(itemBody);
        }
        else
        {
          return StatusCode(500, new { message = "An unexpected error occurred.", details = "Malformed manifest." });
        }
      }
      catch (HttpRequestException ex)
      {
        Console.Error.WriteLine($"System error: {ex}");
        return StatusCode(500, new { message = "An unexpected error occurred.", details = ex.Message });
      }
    }
  }
}

using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace raidguideserver.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GetTokens : ControllerBase
  {

    static readonly Uri endpoint = new(Environment.GetEnvironmentVariable("D2RG_BUNGIE_TOKEN_ENDPOINT")
      ?? throw new InvalidOperationException("Environment variable 'D2RG_BUNGIE_TOKEN_ENDPOINT' is missing or not set."));

    private static readonly HttpClient requestClient = new() { BaseAddress = endpoint };
    [HttpPost]
    public async Task<ActionResult<Token>> Post([FromBody] TokenRequest requestBody)
    {

      if (string.IsNullOrEmpty(requestBody.AuthCode) && string.IsNullOrEmpty(requestBody.RefreshToken))
      {
        return BadRequest("Either auth_code or refresh_token must be provided.");
      }

      string clientId = Environment.GetEnvironmentVariable("D2RG_CLIENT_ID") ?? throw new InvalidOperationException("Environment variable 'D2RG_CLIENT_ID' is missing or not set.");

      string clientSecret = Environment.GetEnvironmentVariable("D2RG_CLIENT_SECRET") ?? throw new InvalidOperationException("Environment variable 'D2RG_CLIENT_SECRET' is missing or not set.");

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

      tokenReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY") ?? throw new InvalidOperationException("Environment variable 'D2RG_API_KEY' is missing or not set."));

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

    private static readonly string CommonBungieEndpoint = "https://www.bungie.net";

    private static Dictionary<uint, string> categoryHashToName = new()
    {
        { ArmorHash, "Armor" },
        { 1U, "Weapon" },
        { 1043342778U, "Subclass Mods" }
    };


    static readonly Uri endpoint = new(CommonBungieEndpoint);

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

    private static DataItem? checkIsArmorSet(string sandboxPerkName) {
      HashSet<string> twoPieceSets = [
        "Force Absorption", "Force Converter", "Regenerative Threshold", "Radiolaria Breach", "Iaido", "Revving Up",
        "Between Poles", "Accretion", "Cursed Fist", "Primary Survivor", "Resupply", "Adrenal Rush",
        "Taking Initiative", "Built Bitter", "Pleas Heard", "Nightmarish Power", "Gift of the Ley Lines",
        "Emergency Electromagnet", "Rapid Repair", "Stack 'Em Up", "Sinew Stitching", "Taken Barrier",
        "Primary Honing", "Vigilant Watch", "Terminal Velocity", "Network Admin", "Augmented Servos",
        "Ionic Overclock", "Photogalvanic", "Paroli", "Bad Dreams", "Iron Sharpens Iron", "Well Prepared",
        "Primary Chain", "Stable Resonance", "Resonant Plating", "A Wish for Protection", "Combat Meditation",
        "Rasputin's Wrath", "Reflex Action", "Ride Together, Die Together", "Augmented Armaments", "Balestra",
        "The Ceremony", "Queensfoil Rush", "Wrecker", "Opening Act", "License to Thrill", "Old Martian Diplomacy",
        "Scoot to Loot", "Crook and Flail", "Lucent Transmutation", "Special Relativity", "Fanfare", "Watchtower", "Untold Greed"
       ];
      HashSet<string> fourPieceSets = [
        "Overflowing Coffers", "Field Expertise", "Suros Harmony", "Superluminal Motion", "Lucent Tithes", "Gift of Sight",
        "Shoot to Scoot", "High Noon", "Lethal Weave", "Room Clearing", "Concussive Rounds", "Truth to Power", "Lucent Swarm",
        "Stesso Tempo", "Augmented Explosives", "Too Old for This", "Hotshot", "Rasputin's Reprisal", "Blade Focus",
        "A Wish Fulfilled", "Siphoning Touch", "Resonance Redirection", "Sublime Transit", "Down the Line", "Ascendant Escape",
        "Dream-Devourer", "Martingale", "Cauterize", "Shock and Clear", "God-like Judgment", "Power Loader", "Network Upload", "Iron Conviction",
        "Supercyclical", "Taken Armaments", "Knit Together", "Burn 'Em Down", "Built from Scratch", "Repurposed Charge",
        "Techeun's Foresight", "Nightmarish Resilience", "Magnificent Duty", "Bittersweet", "Healing Initiative", "Bountiful Munitions",
        "From the Storm", "Primary Phantom", "Power of the Son", "Doppler Effect", "So Very Thin", "Dielectric Drift", "Unfaltering Focus",
        "Collective Power", "Melee Conduction", "Reactive Booster", "Reactive Shock"
      ];

      if (twoPieceSets.Contains(sandboxPerkName))
      {
        return new DataItem(true);
      }
      else if (fourPieceSets.Contains(sandboxPerkName)) {
        return new DataItem(false);
      }

      return null;
    }

    private static List<DataItem> ExtractSetBonuses(string sandboxPerkBody) {
      Dictionary<string, JsonElement> subclassModsDict = JsonSerializer.Deserialize<Dictionary<string, JsonElement>> (sandboxPerkBody) ?? [];
      List<DataItem> armorSets = [];
      foreach (JsonElement sandboxPerkItem in subclassModsDict.Values) {
        if (sandboxPerkItem.TryGetProperty("displayProperties", out JsonElement displayProps)) {
          // description, name, icon, hash
          if (displayProps.TryGetProperty("name", out var nameElem) && nameElem.GetString() is string name) {
            DataItem? curPerk = checkIsArmorSet(name);
            if (curPerk != null) {
              curPerk.Name = name;
              if (displayProps.TryGetProperty("description", out var descriptionElem) && descriptionElem.GetString() is string description) curPerk.Description = description;
              if (displayProps.TryGetProperty("icon", out var iconElem) && iconElem.GetString() is string iconUrl) curPerk.IconUrl = $"{CommonBungieEndpoint}{iconUrl}";
              if (displayProps.TryGetProperty("hash", out var hashElem)) curPerk.Hash = hashElem.GetUInt32();

              curPerk.ItemCategory = "Armor Set Bonus";

              armorSets.Add(curPerk);
            }
          }
        }
      }
      return armorSets;
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

            // TODO: DO NOT ADD DUPES, DO NOT ADD 'Weapon Ornament'.

            // Handle root properties
            if (item.TryGetProperty("itemTypeDisplayName", out var itemType) && itemType.GetString() is string itemTypeStr) newItem.ItemType = itemTypeStr;
            if (item.TryGetProperty("flavorText", out var flavorText) && flavorText.GetString() is string flavorTextStr) newItem.FlavorText = flavorTextStr;
            if (item.TryGetProperty("hash", out var hashCode)) newItem.Hash = hashCode.GetUInt32();

            // Handle nested display properties
            if (item.TryGetProperty("displayProperties", out var displayProperties))
            {
              if (displayProperties.TryGetProperty("name", out var name) && name.GetString() is string itemName) newItem.Name = itemName;
              if (displayProperties.TryGetProperty("icon", out var icon) && icon.GetString() is string iconUrl) newItem.IconUrl = $"{CommonBungieEndpoint}{iconUrl}";
              if (displayProperties.TryGetProperty("description", out var description) && description.GetString() is string itemDescription) newItem.Description = itemDescription;
            }

            string itemCategory = categoryHashToName.GetValueOrDefault(hash) ?? "";
            newItem.ItemCategory = itemCategory;

            // Add item
            if (items.TryGetValue(itemCategory, out List<DataItem>? itemList))
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

         
        if (manifest?.Response?.JsonWorldComponentContentPaths?.En?.DestinyInventoryItemDefinition != null)
        {
          using HttpRequestMessage itemsReq = new(HttpMethod.Get, manifest.Response.JsonWorldComponentContentPaths.En.DestinyInventoryItemDefinition);

          itemsReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));
          using HttpResponseMessage itemsResponse = await requestClient.SendAsync(itemsReq);

          string itemBody = await itemsResponse.Content.ReadAsStringAsync();

          Dictionary<string, List<DataItem>> items = PetesItemJson(itemBody);

          using HttpRequestMessage sandboxPerksReq = new(HttpMethod.Get, manifest.Response.JsonWorldComponentContentPaths.En.DestinySandboxPerkDefinition);


          sandboxPerksReq.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));
          using HttpResponseMessage sandboxPerksResponse = await requestClient.SendAsync(sandboxPerksReq);

          string sandboxPerkBody = await sandboxPerksResponse.Content.ReadAsStringAsync();

          List<DataItem> sandboxPerks = ExtractSetBonuses(sandboxPerkBody);

          items.Add("Set Bonuses", sandboxPerks);

          return items;
          
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

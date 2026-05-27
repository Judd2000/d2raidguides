using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace raidguideserver.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GetTokens : ControllerBase
  {

    static Uri endpoint = new(Environment.GetEnvironmentVariable("D2RG_BUNGIE_TOKEN_ENDPOINT") ?? "https://example.com");

    private static HttpClient requestClient = new() { BaseAddress = endpoint };
    [HttpPost]
    public async Task<ActionResult<Token>> Post([FromBody] TokenRequest requestBody) {

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
        if (!response.IsSuccessStatusCode) {
          Console.WriteLine($"Request failed with status {response.StatusCode}. Response: {body}");

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
        Console.WriteLine($"System error: {ex}");
        return StatusCode(500, new { message = "An unexpected error occurred.", details = ex.Message });
      }
    }
  }

  [Route("api/[controller]")]
  [ApiController]
  public class GetUserData
  {

    [HttpGet]
    public async Task<ActionResult<string>> WeewooWeewoo([FromQuery(Name = "membership_id")] string membershipId,
      [FromQuery(Name = "access_token")] string accessToken)
    {
      return "nothing";
    }
  }
}

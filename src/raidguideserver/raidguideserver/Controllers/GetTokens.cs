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
    [HttpGet]
    public async Task<ActionResult<Token>> Get([FromQuery(Name = "auth_code")] string? authCode, [FromQuery(Name = "refresh_token")] string? refreshToken)
    {

      if (string.IsNullOrEmpty(authCode) && string.IsNullOrEmpty(refreshToken))
      {
        return BadRequest("Either auth_code or refresh_token must be provided.");
      }

      string clientId = Environment.GetEnvironmentVariable("D2RG_CLIENT_ID") ?? "";

      string clientSecret = Environment.GetEnvironmentVariable("D2RG_CLIENT_SECRET") ?? "";

      Dictionary<string, string> keyValues = new() {
        { "grant_type", "authorization_code" },
        { "client_id", clientId },
        { "client_secret", clientSecret }
      };

      if (!string.IsNullOrEmpty(authCode))
      {
        keyValues.Add("code", authCode);
      }
      else if (!string.IsNullOrEmpty(refreshToken))
      {
        keyValues.Add("refreshToken", refreshToken);
      }

      using HttpRequestMessage request = new(HttpMethod.Post, endpoint);

      request.Headers.Add("X-API-Key", Environment.GetEnvironmentVariable("D2RG_API_KEY"));

      request.Content = new FormUrlEncodedContent(keyValues);

      try
      {
        using HttpResponseMessage response = await requestClient.SendAsync(request);

        response.EnsureSuccessStatusCode();

        string body = await response.Content.ReadAsStringAsync();

        Token? token = JsonSerializer.Deserialize<Token>(body);

        return token ?? new Token();
      }
      catch (HttpRequestException ex)
      {
        return BadRequest(ex);
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

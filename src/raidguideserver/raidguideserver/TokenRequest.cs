using System.Text.Json.Serialization;

namespace raidguideserver
{
  public class TokenRequest
  {
    [JsonPropertyName("auth_code")]
    public string? AuthCode { get; set; }

    [JsonPropertyName("refresh_token")]
    public string? RefreshToken { get; set; }
  }
}

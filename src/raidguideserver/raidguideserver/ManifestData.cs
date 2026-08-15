namespace raidguideserver
{

  //Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition
  public class ManifestData
  {
    public ManifestResponse? Response { get; set; }
  }

  public class ManifestResponse {
    public ContentPaths? JsonWorldComponentContentPaths { get; set; }
  }

  public class ContentPaths {
    public EnglishDefs? En { get; set; }
  }

  public class EnglishDefs {
    public string? DestinyInventoryItemDefinition { get; set; }

    public string? DestinySandboxPerkDefinition { get; set; }
  }
}

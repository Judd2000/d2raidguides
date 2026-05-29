namespace raidguideserver
{

  //Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition
  public class ManifestData
  {
    public ManifestResponse response { get; set; }
  }

  public class ManifestResponse {
    public ContentPaths jsonWorldComponentContentPaths { get; set; }
  }

  public class ContentPaths {
    public EnglishDefs en { get; set; }
  }

  public class EnglishDefs {
    public string destinyInventoryItemDefinition { get; set; }

    public string destinySandboxPerkDefinition { get; set; }
  }
}

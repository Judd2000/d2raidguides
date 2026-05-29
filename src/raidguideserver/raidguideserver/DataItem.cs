namespace raidguideserver
{
  public class DataItem
  {
    public string ItemCategory { get; set; } = "";
    public string Name { get; set; } = "";
    public string IconUrl { get; set; } = "";
    public string Description { get; set; } = "";
    public string ItemType { get; set; } = "";
    public string FlavorText { get; set; } = "";
    public uint Hash { get; set; }

    public override string ToString()
    {
      return $"[\n\tname: {this.Name }\n\t itemType: {this.itemType }\n\t itemCategory: {this.itemCategory }\n\t description: {this.description }\n\t flavorText: {this.flavorText }\n\t iconUrl: {this.iconUrl }\n\t hash: {this.hash }\n]";
    }
  }
}

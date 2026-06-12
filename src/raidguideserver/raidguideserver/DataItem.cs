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
      return $"[\n\tname: {this.Name }\n\t itemType: {this.ItemType }\n\t itemCategory: {this.ItemCategory }\n\t description: {this.Description }\n\t flavorText: {this.FlavorText }\n\t iconUrl: {this.IconUrl }\n\t hash: {this.Hash }\n]";
    }
  }
}

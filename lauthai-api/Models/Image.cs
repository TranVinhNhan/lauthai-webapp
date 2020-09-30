namespace lauthai_api.Models
{
    public class Image : BaseEntity
    {
        public string Url { get; set; }
        public bool IsMainPfp { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
        public Image()
        {
            IsMainPfp = false;
        }
    }
}
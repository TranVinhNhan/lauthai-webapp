namespace lauthai_api.Models
{
    public class Image
    {
        public int Id { get; set; }
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
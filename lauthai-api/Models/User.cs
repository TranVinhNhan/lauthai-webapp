namespace lauthai_api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string DisplayedName { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
    }
}
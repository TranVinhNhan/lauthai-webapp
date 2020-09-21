using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace lauthai_api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public byte[] PasswordSalt { get; set; }
        public byte[] PasswordHash { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
        public User()
        {
            Role = "User";
            Feedbacks = new Collection<Feedback>();
        }
    }
}
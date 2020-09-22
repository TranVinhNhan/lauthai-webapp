using System.ComponentModel.DataAnnotations;

namespace lauthai_api.Dtos
{
    public class UserToCreateDto
    {
        [Required(ErrorMessage = "Username is required")]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "Username has to be 4 or 16 characters")]
        public string Username { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 8, ErrorMessage = "Password has to be between 8 - 16 characters")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }
    }
}
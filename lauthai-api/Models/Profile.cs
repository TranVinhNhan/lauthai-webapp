using System.ComponentModel.DataAnnotations.Schema;

namespace lauthai_api.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string PfpUrl { get; set; }
        public string Job { get; set; }
        public string MarriedStatus { get; set; }
        public string District { get; set; }
        public string Phone { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public int? UniversityId { get; set; }
        public University University { get; set; }
    }
}
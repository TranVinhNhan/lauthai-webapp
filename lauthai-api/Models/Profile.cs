using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lauthai_api.Models
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Job { get; set; }
        public string MarriedStatus { get; set; }
        public string District { get; set; }
        public string Phone { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
        

        public int? UniversityId { get; set; }
        public University University { get; set; }
        public int? CategoryId { get; set; }
        public Category Category { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }
        public ICollection<Image> Images { get; set; }
        public Profile()
        {
            OrderDetails = new Collection<OrderDetail>();
            Images = new Collection<Image>();
        }
    }
}
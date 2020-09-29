using System.ComponentModel.DataAnnotations.Schema;

namespace lauthai_api.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public decimal PriceAtBuyTime { get; set; }
        public string NameAtBuyTime { get; set; }
        public string PhoneAtBuyTime { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
    }
}
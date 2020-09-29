using System.ComponentModel.DataAnnotations.Schema;

namespace lauthai_api.Dtos
{
    public class OrderDetailToCreateDto
    {
        public int Quantity { get; set; }
        public int ProfileId { get; set; }
        [Column(TypeName = "decimal(18,4)")]
        public decimal PriceAtBuyTime { get; set; }
        public string NameAtBuyTime { get; set; }
        public string PhoneAtBuyTime { get; set; }
    }
}
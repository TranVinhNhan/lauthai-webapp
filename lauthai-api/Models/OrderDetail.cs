namespace lauthai_api.Models
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }
    }
}
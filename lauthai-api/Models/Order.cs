using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace lauthai_api.Models
{
    public class Order: BaseEntity
    {
        public DateTime DateCreated { get; set; }
        public string CustomerFullname { get; set; }
        public string CustomerPhone { get; set; }
        public string MeetingPlace { get; set; }
        public DateTime MeetingDate { get; set; }
        public string Option { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<OrderDetail> OrderDetails { get; set; }
        public Order()
        {
            OrderDetails = new Collection<OrderDetail>();
        }
    }
}
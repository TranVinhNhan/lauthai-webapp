using System;
using System.Collections.Generic;

namespace lauthai_api.Dtos
{
    public class OrderToCreateDto
    {
        public string CustomerFullname { get; set; }
        public string CustomerPhone { get; set; }
        public string MeetingPlace { get; set; }
        public DateTime MeetingDate { get; set; }
        public string Option { get; set; }
        public ICollection<OrderDetailToCreateDto> OrderDetails { get; set; }
    }
}
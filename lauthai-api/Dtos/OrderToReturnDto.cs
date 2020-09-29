using System;

namespace lauthai_api.Dtos
{
    public class OrderToReturnDto
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public string CustomerFullname { get; set; }
        public string CustomerPhone { get; set; }
        public string MeetingPlace { get; set; }
        public DateTime MeetingDate { get; set; }
        public string Option { get; set; }
        public int UserId { get; set; }
    }
}
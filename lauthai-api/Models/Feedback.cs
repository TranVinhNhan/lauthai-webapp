using System;

namespace lauthai_api.Models
{
    public class Feedback
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DayCreated { get; set; }
        public string ContactEmail { get; set; }
        public string FeedbackTxt { get; set; }

        public int? UserId { get; set; }
        public User User { get; set; }
    }
}
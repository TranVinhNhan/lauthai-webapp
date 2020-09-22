using System;

namespace lauthai_api.Dtos
{
    public class FeedbackToCreateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DayCreated { get; set; }
        public string ContactEmail { get; set; }
        public string FeedbackTxt { get; set; }

        public int? UserId { get; set; }

    }
}
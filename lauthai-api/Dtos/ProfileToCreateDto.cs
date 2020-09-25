using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace lauthai_api.Dtos
{
    public class ProfileToCreateDto
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string PfpUrl { get; set; }
        public string Job { get; set; }
        public string MarriedStatus { get; set; }
        public string District { get; set; }
        public string Phone { get; set; }
        public string Price { get; set; }
<<<<<<< HEAD
        public int? UniversityId { get; set; }
        public int? CategoryId {get; set;}
=======
        public int UniversityId { get; set; }
>>>>>>> f9bc99b2711fa11666b3fa52a71346b0cc538d19
    }
}
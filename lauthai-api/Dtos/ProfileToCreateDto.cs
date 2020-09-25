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
        public int UniversityId { get; set; }
    }
}
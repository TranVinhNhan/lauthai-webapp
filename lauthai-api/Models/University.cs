using System.Collections.Generic;

namespace lauthai_api.Models
{
    public class University
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Profile> Profiles { get; set; }
    }
}
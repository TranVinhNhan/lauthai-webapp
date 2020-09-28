
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace lauthai_api.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Profile> Profiles { get; set; }
        public Category()
        {
            Profiles = new Collection<Profile>();
        }
    }
}
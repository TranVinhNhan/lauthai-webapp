using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace lauthai_api.Models
{
    public class University: BaseEntity
    {
        public string Name { get; set; }

        public ICollection<Profile> Profiles { get; set; }
        public University()
        {
            Profiles = new Collection<Profile>();
        }
    }
}
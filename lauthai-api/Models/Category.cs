using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace lauthai_api.Models
{
      public class Category
      {
         public int CategoryId { get; set; }
        public string NameCategory { get; set; }

        public ICollection<Profile> Profiles { get; set; }
        public Category()
        {
            Profiles = new Collection<Profile>();
        }
      }
}
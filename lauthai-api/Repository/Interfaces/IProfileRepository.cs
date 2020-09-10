using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.Repository.Interfaces
{
    public interface IProfileRepository : IGenericRepository<Profile>
    {
        Task<IEnumerable<Profile>> GetAllProfiles();
    }
}
using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IProfileRepository : IGenericRepository<Profile>
    {
        Task<IEnumerable<Profile>> GetAllProfiles();
        Task<Profile> GetProfileById(int id);
    }
}
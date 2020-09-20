using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IUniversityRepository: IGenericRepository<University>
    {
         Task<IEnumerable<University>> GetAllUni();
         Task<University> GetUniversityById(int id);
    }
}
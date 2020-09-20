using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IUserRepository: IGenericRepository<User>
    {
         Task<User> GetUserById(int id);
    }
}
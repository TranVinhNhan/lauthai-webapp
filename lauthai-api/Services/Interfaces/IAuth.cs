using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IAuth
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string username, string password);
         string GetTokenString(User user);
    }
}
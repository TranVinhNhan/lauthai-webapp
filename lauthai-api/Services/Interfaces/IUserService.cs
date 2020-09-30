using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface IUserService
    {
        Task<bool> IsUsernameAlreadyExist(string username);
        Task<User> GetUserByUsername(string username);
        Task<User> GetUserById(int id);
        Task<IEnumerable<User>> GetAllUsers();
        void Add(User obj);
        void Update(User obj);
        void Delete(User obj);
        Task<bool> SaveAll();
    }
}

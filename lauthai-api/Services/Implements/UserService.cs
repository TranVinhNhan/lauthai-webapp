using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Implements
{
    public class UserService : IUserService
    {
        private readonly ILauThaiRepository<User> _userRepository;

        public UserService(ILauThaiRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public void Add(User obj)
        {
            _userRepository.Add(obj);
        }

        public void Delete(User obj)
        {
            _userRepository.Delete(obj);
        }

        public Task<bool> SaveAll()
        {
            return _userRepository.SaveAll();
        }

        public void Update(User obj)
        {
            _userRepository.Update(obj);
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _userRepository.GetAllAsync();
        }

        public async Task<User> GetUserById(int id)
        {
            return await _userRepository.GetByIdAsync(id);
        }

        public async Task<User> GetUserByUsername(string username)
        {
            return (await _userRepository.GetAllAsync()).FirstOrDefault(r=>r.Username == username);
        }

        public async Task<bool> IsUsernameAlreadyExist(string username)
        {
            return (await _userRepository.GetAllAsync()).FirstOrDefault(r => r.Username == username) != null;
        }
    }
}

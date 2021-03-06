using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer
{
    public interface ILauThaiRepository: IGenericRepository
    {
        // Profile
        Task<IEnumerable<Profile>> GetAllProfiles();
        Task<Profile> GetProfileById(int id);
        // University
        Task<IEnumerable<University>> GetAllUni();
        Task<University> GetUniversityById(int id);

        // Category
        Task<IEnumerable<Category>> GetAllCat();
        Task<Category> GetCategoryById(int id);
        
        // User
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUserById(int id);
        Task<User> GetUserByUsername(string username);
        Task<bool> IsUserExist(string username);
        // Feedback
        Task<IEnumerable<Feedback>> GetAllFeedbacks();
        Task<Feedback> GetFeedbackById(int id);
        // Order detail
        Task<OrderDetail> GetOrderDetailById(int id);
        // Order
        Task<Order> GetOrderById(int id);
        Task<IEnumerable<Order>> GetAllOrdersOfUser(int id);
    }
}
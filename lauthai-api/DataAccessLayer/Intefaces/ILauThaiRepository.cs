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
        // User
        Task<User> GetUserById(int id);
        // Feedback
        Task<IEnumerable<Feedback>> GetAllFeedbacks();
        Task<Feedback> GetFeedbackById(int id);
    }
}
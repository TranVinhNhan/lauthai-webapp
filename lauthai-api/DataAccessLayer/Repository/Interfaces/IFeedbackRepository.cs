using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IFeedbackRepository: IGenericRepository<Feedback>
    {
        Task<IEnumerable<Feedback>> GetAllFeedbacks();
        Task<Feedback> GetFeedbackById(int id);

    }
}
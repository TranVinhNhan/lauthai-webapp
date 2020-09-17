using System.Collections.Generic;
using System.Threading.Tasks;
using lauthai_api.Models;

namespace lauthai_api.DataAccessLayer.Repository.Interfaces
{
    public interface IFeedbackRepository
    {
       Task<IEnumerable<Feedback>>  GetAllFeedbacks();
        
    }
}
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Repository.Interfaces;

namespace lauthai_api.DataAccessLayer.Repository
{
    public interface IUnitOfWork
    {
        IProfileRepository ProfileRepository { get; }
        IUniversityRepository UniversityRepository { get; }
        IFeedbackRepository FeedbackRepository { get; }
        Task<bool> SaveAll();
    }
}
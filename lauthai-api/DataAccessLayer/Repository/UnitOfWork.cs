using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Implements;
using lauthai_api.DataAccessLayer.Repository.Interfaces;

namespace lauthai_api.DataAccessLayer.Repository
{
    public class UnitOfWork : IUnitOfWork // dùng chung service
    {
        private readonly LauThaiDbContext _context;
        private IProfileRepository _profileRepository;
        private IUniversityRepository _universityRepository;
        private IFeedbackRepository _feedbackRepository;
        private IUserRepository _userRepository;
        public UnitOfWork(LauThaiDbContext context)
        {
            _context = context;
        }
        public IProfileRepository ProfileRepository
        {
            get { return _profileRepository = _profileRepository ?? new ProfileRepository(_context); }
        }

        public IUniversityRepository UniversityRepository
        {
            get { return _universityRepository = _universityRepository ?? new UniversityRepository(_context); }
        }

        public IFeedbackRepository FeedbackRepository
        {
            get { return _feedbackRepository = _feedbackRepository ?? new FeedbackRepository(_context); }

        }

        public IUserRepository UserRepository
        {
            get { return _userRepository = _userRepository ?? new UserRpository(_context); }
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}
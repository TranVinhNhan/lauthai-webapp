using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Implements;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Implements
{
    public class ProfileService : IProfileService
    {
        private readonly ILauThaiRepository<Profile> _profileRepository;

        public ProfileService(ILauThaiRepository<Profile> profileRepository)
        {
            _profileRepository = profileRepository;
        }

        public void Add(Profile obj)
        {
            _profileRepository.Add(obj);
        }

        public void Delete(Profile obj)
        {
            _profileRepository.Delete(obj);
        }

        public void Update(Profile obj)
        {
            _profileRepository.Update(obj);
        }

        public async Task<bool> SaveAll()
        {
            return await _profileRepository.SaveAll();
        }

        public async Task<IQueryable<Profile>> GetAllProfiles()
        {
            var profiles = await _profileRepository.GetAllAsync();
            return profiles;
        }

        public async Task<Profile> GetProfileById(int id)
        {
            var profile = await _profileRepository.GetByIdAsync(id);
            return profile;
        }
    }
}

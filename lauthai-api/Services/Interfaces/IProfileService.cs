using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Repository.Implements;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface IProfileService
    {
        Task<IQueryable<Profile>> GetAllProfiles();
        Task<Profile> GetProfileById(int id);
        void Add(Profile obj);
        void Update(Profile obj);
        void Delete(Profile obj);
        Task<bool> SaveAll();
    }
}

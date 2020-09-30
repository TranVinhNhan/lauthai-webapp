using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Interfaces
{
    public interface IUniversityService
    {
        Task<IQueryable<University>> GetAllUniversities();
        Task<University> GetUniversityById(int id);
        void Add(University obj);
        void Update(University obj);
        void Delete(University obj);
        Task<bool> SaveAll();
    }
}

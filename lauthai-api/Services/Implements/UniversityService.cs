using lauthai_api.DataAccessLayer;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.Models;
using lauthai_api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lauthai_api.Services.Implements
{
    public class UniversityService : IUniversityService
    {
        private readonly ILauThaiRepository<University> _universityRepository;

        public UniversityService(ILauThaiRepository<University> universityRepository)
        {
            _universityRepository = universityRepository;
        }

        public void Add(University obj)
        {
            _universityRepository.Add(obj);
        }

        public void Delete(University obj)
        {
            _universityRepository.Delete(obj);
        }

        public void Update(University obj)
        {
            _universityRepository.Update(obj);
        }

        public Task<bool> SaveAll()
        {
            return _universityRepository.SaveAll();
        }

        public async Task<IQueryable<University>> GetAllUniversities()
        {
            var query = await _universityRepository.GetAllAsync();
            return query;
        }

        public async Task<University> GetUniversityById(int id)
        {
            var university = await _universityRepository.GetByIdAsync(id);
            return university;
        }
    }
}

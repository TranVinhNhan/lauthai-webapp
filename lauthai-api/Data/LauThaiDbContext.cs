using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.Data
{
    public class LauThaiDbContext : DbContext
    {
        public LauThaiDbContext(DbContextOptions<LauThaiDbContext> options): base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<Profile> Profiles { get; set; }
        public DbSet<University> Universities { get; set; }
    }
}
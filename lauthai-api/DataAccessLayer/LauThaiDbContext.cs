using lauthai_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Data
{
    public class LauThaiDbContext : DbContext // tạo thử 2 : Entity framework core  và là nơi lấy dữ liệu từ sql lên 
    {
        // contructor khởi tạo 
        public LauThaiDbContext(DbContextOptions<LauThaiDbContext> options) : base(options)  
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<Profile> Profiles { get; set; } //đại diện cho các bảng bên sql 
        public DbSet<University> Universities { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
    }
}
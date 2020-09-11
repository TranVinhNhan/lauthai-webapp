using System.Security.Cryptography;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Data;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class AuthRepository : IAuthRepository
    {
        private readonly LauThaiDbContext _context;
        public AuthRepository(LauThaiDbContext context)
        {
            _context = context;
        }


        public async Task<User> Login(string username, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == username);
            if (user == null || !VerifyPassword(password, user.PasswordSalt, user.PasswordHash))
                return null;

            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordSalt, passwordHash;
            CreatePasswordSaltAndHash(password, out passwordSalt, out passwordHash);

            user.PasswordSalt = passwordSalt;
            user.PasswordHash = passwordHash;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        // https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/consumer-apis/password-hashing?view=aspnetcore-3.1
        private void CreatePasswordSaltAndHash(string password, out byte[] passwordSalt, out byte[] passwordHash)
        {
            passwordSalt = new byte[128 / 8];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(passwordSalt);
            }

            // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
            passwordHash = KeyDerivation.Pbkdf2(
                password: password,
                salt: passwordSalt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8);
        }

        private bool VerifyPassword(string password, byte[] passwordSalt, byte[] passwordHash)
        {
            byte[] loginPasswordHash = KeyDerivation.Pbkdf2(
                password: password,
                salt: passwordSalt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8
            );

            for (int i = 0; i < loginPasswordHash.Length; i++)
            {
                if (loginPasswordHash[i] != passwordHash[i])
                    return false;
            }
            return true;
        }
        public async Task<bool> IsUserExist(string username)
        {
            return await _context.Users.AnyAsync(u => u.Username == username) ? true : false;
        }
    }
}
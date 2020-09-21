using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using lauthai_api.DataAccessLayer.Repository.Interfaces;
using lauthai_api.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace lauthai_api.DataAccessLayer.Repository.Implements
{
    public class Auth : IAuth
    {
        private readonly ILauThaiRepository _repo;
        private readonly IConfiguration _config;
        public Auth(ILauThaiRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;
        }

        public string GetTokenString(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _repo.GetUserByUsername(username);
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
            _repo.Add(user);

            if (await _repo.SaveAll())
            {
                return user;
            }
            throw new System.Exception("Create user failed at save");
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
    }
}
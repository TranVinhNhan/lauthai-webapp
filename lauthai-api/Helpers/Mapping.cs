using AutoMapper;
using lauthai_api.Dtos;

namespace lauthai_api.Helpers
{
    public class Mapping: Profile
    {
        public Mapping()
        {
            CreateMap<ProfileToCreateDto, lauthai_api.Models.Profile>();
            CreateMap<ProfileToUpdateDto, lauthai_api.Models.Profile>();
        }
    }
}
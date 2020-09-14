using AutoMapper;
using lauthai_api.Dtos;

namespace lauthai_api.Helpers
{
    public class Mapping: Profile
    {
        public Mapping()
        {
            CreateMap<ProfileToCreateDto, Models.Profile>();
            CreateMap<ProfileToUpdateDto, Models.Profile>();

            CreateMap<UserToCreateDto, Models.User>();
            CreateMap<AdminToCreateDto, Models.User>();
        }
    }
}
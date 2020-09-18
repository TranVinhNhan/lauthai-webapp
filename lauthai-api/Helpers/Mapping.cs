using AutoMapper;
using lauthai_api.Dtos;

namespace lauthai_api.Helpers
{
    public class Mapping: Profile
    {
        public Mapping()// thay vì gán giá trị từng dòng thì map giúp gán nhanh hơn khi nó lấy tất cả để gán 
        {
            CreateMap<ProfileToCreateDto, Models.Profile>();
            CreateMap<ProfileToUpdateDto, Models.Profile>();

            CreateMap<UserToCreateDto, Models.User>();
            CreateMap<AdminToCreateDto, Models.User>();

            CreateMap<FeedbackCreateDto, Models.Feedback>();
        }
    }
}
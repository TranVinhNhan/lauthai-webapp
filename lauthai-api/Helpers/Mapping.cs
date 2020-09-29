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
            CreateMap<UserToUpdateDto, Models.User>();
            CreateMap<Models.User, UserToReturnDto>();

            CreateMap<FeedbackToCreateDto, Models.Feedback>();

            CreateMap<OrderToCreateDto, Models.Order>();
            CreateMap<Models.Order, OrderToReturnDto>();

            CreateMap<OrderDetailToCreateDto, Models.OrderDetail>();
        }
    }
}
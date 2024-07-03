using AutoMapper;
using BusinessObject.Dtos.AuthDto;
using BusinessObject.Dtos.AuthDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.AuthProfiles
{
    public class AuthMappingProfile : Profile
    {
        public AuthMappingProfile()
        {
            // login
            CreateMap<User, LoginDtoInfoForAuth>()
                .ForMember(dest => dest.RoleName, opt => opt.MapFrom(src => src.UserRoleRole.RoleName))
                .ReverseMap();

            // register 
            CreateMap<User, RegisterDtoForAuth>().ReverseMap();
            CreateMap<User, RegisterDtoInfoForAuth>()
                .ForMember(dest => dest.RoleName, opt => opt.MapFrom(src => src.UserRoleRole.RoleName))
                .ReverseMap();
        }
    }
}

using AutoMapper;
using BusinessObject.Dtos.NotificationDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class NotificationMappingProfile : Profile
    {
        public NotificationMappingProfile()
        {
            // dest => src
            // == customer == 
            CreateMap<Notification, NotificationReadDtoForCustomer>()
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.CourseCourse.CourseName))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ReverseMap();

            // == admin == 
            CreateMap<Notification, NotificationReadDtoForAdmin>()
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.CourseCourse.CourseName))
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ReverseMap();
            CreateMap<Notification, NotificationCreateDtoForAdmin>().ReverseMap();
            CreateMap<Notification, NotificationUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

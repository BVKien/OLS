using AutoMapper;
using BusinessObject.Dtos.CourseEnrolledDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class CourseEnrolledMappingProfile : Profile
    {
        public CourseEnrolledMappingProfile()
        {
            // src => dest 
            CreateMap<CourseEnrolled, CourseEnrolledCreateDtoForCustomer>().ReverseMap();
            CreateMap<CourseEnrolled, CourseEnrolledReadDtoForCustomer>()
                .ForMember(dest => dest.CourseName, opt => opt.MapFrom(src => src.CourseCourse.CourseName))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.CourseCourse.Description))
                .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.CourseCourse.Image))
                .ReverseMap();
        }
    }
}

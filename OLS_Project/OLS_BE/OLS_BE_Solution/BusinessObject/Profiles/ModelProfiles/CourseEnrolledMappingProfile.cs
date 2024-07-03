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
        }
    }
}

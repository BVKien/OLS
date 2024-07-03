using AutoMapper;
using BusinessObject.Dtos.CourseDto;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfile
{
    public class CourseMappingProfile : Profile
    {
        public CourseMappingProfile()
        {
            // src -> dest 
            // == customer == 
            CreateMap<Course, CourseReadDtoForCustomer>().ReverseMap();
            CreateMap<Course, CourseReadDtoForCustomer>()
                .ForMember(dest => dest.LearningPathName, opt => opt.MapFrom(src => src.LearningPathLearningPath.LearningPathName))
                .ForMember(dest => dest.LearningPathImage, opt => opt.MapFrom(src => src.LearningPathLearningPath.Image))
                .ReverseMap();

            // == admin == 
            CreateMap<Course, CourseReadDtoForAdmin>().ReverseMap();
            CreateMap<Course, CourseCreateDtoForAdmin>().ReverseMap();
            CreateMap<Course, CourseUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

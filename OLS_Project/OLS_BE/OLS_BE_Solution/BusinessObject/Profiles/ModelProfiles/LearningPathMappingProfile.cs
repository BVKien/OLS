using AutoMapper;
using BusinessObject.Dtos.LearningPathDto;
using BusinessObject.Dtos.LearningPathDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfile
{
    public class LearningPathMappingProfile : Profile
    {
        public LearningPathMappingProfile()
        {
            // src -> dest 
            // == customer == 
            CreateMap<LearningPath, LearningPathReadDtoForCustomer>()
                .ForMember(dest => dest.CourseAmount, opt => opt.MapFrom(src => src.Courses.Count))
                .ReverseMap();

            // == admin == 
            CreateMap<LearningPath, LearningPathReadDtoForAdmin>().ReverseMap();
            CreateMap<LearningPath, LearningPathCreateDtoForAdmin>().ReverseMap();
            CreateMap<LearningPath, LearningPathUpdateDtoForAdmin>().ReverseMap();
        }
    }
}
//.ForMember(dest => dest.TotalUnitOrdered, otp => otp.MapFrom(src => src.OrderDetails.Sum(x => x.Quantity)))
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
            CreateMap<LearningPath, LearningPathReadDtoForCustomer>().ReverseMap();
            
            // == admin == 
            CreateMap<LearningPath, LearningPathReadDtoForAdmin>().ReverseMap();
            CreateMap<LearningPath, LearningPathCreateDtoForAdmin>().ReverseMap();
            CreateMap<LearningPath, LearningPathUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

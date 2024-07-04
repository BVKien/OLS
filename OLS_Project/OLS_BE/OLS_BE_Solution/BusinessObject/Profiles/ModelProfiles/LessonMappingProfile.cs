using AutoMapper;
using BusinessObject.Dtos.LessonDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class LessonMappingProfile : Profile
    {
        public LessonMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<Lesson, LessonReadDtoForCustomer>()
                .ForMember(dest => dest.ChapterName, opt => opt.MapFrom(src => src.ChapterChapter.ChapterName))
                .ReverseMap();

            // == admin == 
            CreateMap<Lesson, LessonReadDtoForAdmin>().ReverseMap();
            CreateMap<Lesson, LessonCreateDtoForAdmin>().ReverseMap();
            CreateMap<Lesson, LessonUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

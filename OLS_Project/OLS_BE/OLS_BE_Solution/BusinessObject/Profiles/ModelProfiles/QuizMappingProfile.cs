using AutoMapper;
using BusinessObject.Dtos.QuizDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class QuizMappingProfile : Profile
    {
        public QuizMappingProfile()
        {
            // dest => src 
            CreateMap<Quiz, QuizReadDtoForCustomer>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.LessonLesson.Title))
                .ReverseMap();
            CreateMap<Quiz, QuizReadDtoForAdmin>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.LessonLesson.Title))
                .ReverseMap();
            CreateMap<Quiz, QuizCreateDtoForAdmin>().ReverseMap();
            CreateMap<Quiz, QuizUpdateDtoForAdmin>().ReverseMap();
            CreateMap<Quiz, QuizBannedDtoForAdmin>().ReverseMap();
        }
    }
}

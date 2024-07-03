using AutoMapper;
using BusinessObject.Dtos.QuestionDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    internal class QuestionMappingProfile : Profile
    {
        public QuestionMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<Question, QuestionReadDtoForCustomer>()
                .ForMember(dest => dest.QuizName, opt => opt.MapFrom(src => src.QuizQuiz.QuizName))
                .ReverseMap();

            // == admin ==
            CreateMap<Question, QuestionReadDtoForAdmin>().ReverseMap();
            CreateMap<Question, QuestionCreateDtoForAdmin>().ReverseMap();
            CreateMap<Question, QuestionUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

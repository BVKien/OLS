using AutoMapper;
using BusinessObject.Dtos.AnswerDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class AnswerMappingProfile : Profile
    {
        public AnswerMappingProfile()
        {
            // dest => src 
            // == customer ==
            CreateMap<Answer, AnswerReadDtoForCustomer>()
                .ForMember(dest => dest.QuestionContent, opt => opt.MapFrom(src => src.QuestionQuestion.QuestionContent))
                .ReverseMap();

            // == admin == 
            CreateMap<Answer, AnswerReadDtoForAdmin>().ReverseMap();
            CreateMap<Answer, AnswerCreateDtoForAdmin>().ReverseMap();
            CreateMap<Answer, AnswerUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

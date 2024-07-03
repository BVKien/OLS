using AutoMapper;
using BusinessObject.Dtos.LessonDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class LessonMappingProfile : Profile
    {
        public LessonMappingProfile()
        {
            // dest => src 
            CreateMap<Lesson, LessonReadDtoForCustomer>()
                .ForMember(dest => dest.ChapterName, opt => opt.MapFrom(src => src.ChapterChapter.ChapterName))
                .ReverseMap();
        }
    }
}

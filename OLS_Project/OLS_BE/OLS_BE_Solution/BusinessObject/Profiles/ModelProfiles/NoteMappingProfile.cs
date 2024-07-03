using AutoMapper;
using BusinessObject.Dtos.NoteDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class NoteMappingProfile : Profile
    {
        public NoteMappingProfile()
        {
            // dest => src 
            CreateMap<Note, NoteReadDtoForCustomer>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.LessonLesson.Title))
                .ReverseMap();
            CreateMap<Note, NoteCreateDtoForCustomer>().ReverseMap();
            CreateMap<Note, NoteUpdateDtoForCustomer>().ReverseMap();
        }
    }
}

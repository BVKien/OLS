using AutoMapper;
using BusinessObject.Dtos.DiscussDtos;
using BusinessObject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class DiscussMappingProfile : Profile
    {
        public DiscussMappingProfile()
        {
            // dest => src 
            // == customer == 
            CreateMap<Discuss, DiscussReadDtoForCustomer>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.LessonLesson.Title))
                .ReverseMap();

            // == admin ==
            CreateMap<Discuss, DiscussReadDtoForAdmin>().ReverseMap();
            CreateMap<Discuss, DiscussCreateDtoForAdmin>().ReverseMap();
            CreateMap<Discuss, DiscussUpdateDtoForAdmin>().ReverseMap();
        }
    }
}

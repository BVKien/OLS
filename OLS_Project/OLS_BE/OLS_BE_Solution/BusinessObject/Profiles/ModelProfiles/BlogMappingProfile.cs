using AutoMapper;
using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class BlogMappingProfile : Profile
    {
        public BlogMappingProfile()
        {
            // src -> dest
            // == customer == 
            CreateMap<Blog, BlogReadDtoForCustomer>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ForMember(dest => dest.UserImage, opt => opt.MapFrom(src => src.UserUser.Image))
                .ForMember(dest => dest.BlogTopicName, opt => opt.MapFrom(src => src.BlogTopicBlogTopic.BlogTopicName))
                .ReverseMap();
            CreateMap<Blog, BlogCreateDtoForCustomer>().ReverseMap();
            CreateMap<Blog, BlogUpdateDtoForCustomer>().ReverseMap();

            // == expert == 
            CreateMap<Blog, BlogReadDtoForExpert>().ReverseMap();
            CreateMap<Blog, BlogCreateDtoForExpert>().ReverseMap();
            CreateMap<Blog, BlogUpdateDtoForExpert>().ReverseMap();
        }
    }
}

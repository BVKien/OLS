using AutoMapper;
using BusinessObject.Dtos.BlogCommentDtos;
using BusinessObject.Models;

namespace BusinessObject.Profiles.ModelProfiles
{
    public class BlogCommentMappingProfile : Profile
    {
        public BlogCommentMappingProfile()
        {
            // dest => src 
            CreateMap<BlogComment, BlogCommentReadDtoForCustomer>()
                .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.UserUser.FullName))
                .ForMember(dest => dest.UserImage, opt => opt.MapFrom(src => src.UserUser.Image))
                .ForMember(dest => dest.BlogTitle, opt => opt.MapFrom(src => src.BlogBlog.BlogTitle))
                .ReverseMap();
            CreateMap<BlogComment, BlogCommentCreateDtoForCustomer>().ReverseMap();
            CreateMap<BlogComment, BlogCommentUpdateDtoForCustomer>().ReverseMap();
        }
    }
}

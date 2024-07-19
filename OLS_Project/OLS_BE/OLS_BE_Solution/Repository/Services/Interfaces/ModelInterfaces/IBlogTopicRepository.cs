using BusinessObject.Dtos.BlogDtos;
using BusinessObject.Dtos.BlogTopicDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Services.Interfaces.ModelInterfaces
{
    public interface IBlogTopicRepository
    {
        // == customer == 
        List<BlogTopicReadDtoForCustomer> GetAllBlogTopicForCustomer();

        // == expert ==
        List<BlogTopicReadDtoForExpert> GetAllBlogTopicForExpert();
        BlogTopicReadDtoForExpert GetBlogTopicByBlogTopicIdForExpert(int btId);
        void CreateBlogTopic(BlogTopicCreateDtoForExpert bt);
        void UpdateBlogTopic(int btId, BlogTopicUpdateDtoForExpert bt);
        void DeleteBlogTopic(int btId);
    }
}

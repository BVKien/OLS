using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.BlogDtos
{
    public class BlogUpdateDtoForCustomer
    {
        public int BlogId { get; set; }
        public string? BlogTitle { get; set; }
        public string? BlogImage { get; set; }
        public string? BlogContent { get; set; }
        public DateTime? PostDate { get; set; }
        public int? Status { get; set; }
        public TimeSpan? ReadTime { get; set; }
        public int BlogTopicBlogTopicId { get; set; }
        public int BlogTagBlogTagId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class BlogUpdateDtoForExpert
    {
        public int BlogId { get; set; }
        public string? BlogTitle { get; set; }
        public string? BlogImage { get; set; }
        public string? BlogContent { get; set; }
        public DateTime? PostDate { get; set; }
        public int? Status { get; set; }
        public TimeSpan? ReadTime { get; set; }
        public int BlogTopicBlogTopicId { get; set; }
        public int BlogTagBlogTagId { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

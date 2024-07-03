using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.BlogCommentDtos
{
    public class BlogCommentCreateDtoForCustomer 
    {
        public int BlogCommentId { get; set; }
        public int? UserUserId { get; set; }
        public int? ReplyForCommentId { get; set; }
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? BlogBlogId { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class BlogTopic
    {
        public BlogTopic()
        {
            Blogs = new HashSet<Blog>();
        }

        public int BlogTopicId { get; set; }
        public string? BlogTopicName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Blog> Blogs { get; set; }
    }
}

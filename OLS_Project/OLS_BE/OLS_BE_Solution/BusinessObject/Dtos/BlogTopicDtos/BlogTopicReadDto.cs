using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.BlogTopicDtos
{
    public class BlogTopicReadDtoForCustomer
    {
        public int BlogTopicId { get; set; }
        public string? BlogTopicName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class BlogTopicReadDtoForExpert
    {
        public int BlogTopicId { get; set; }
        public string? BlogTopicName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.BlogTopicDtos
{
    public class BlogTopicCreateDtoForExpert
    {
        public int BlogTopicId { get; set; }
        public string? BlogTopicName { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

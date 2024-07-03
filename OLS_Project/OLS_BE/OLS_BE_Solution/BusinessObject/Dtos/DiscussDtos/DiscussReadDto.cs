using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.DiscussDtos
{
    public class DiscussReadDtoForAdmin
    {
        public int DiscussId { get; set; }
        public int LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class DiscussReadDtoForCustomer
    {
        public int DiscussId { get; set; }
        public int LessonLessonId { get; set; }
        public string? Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

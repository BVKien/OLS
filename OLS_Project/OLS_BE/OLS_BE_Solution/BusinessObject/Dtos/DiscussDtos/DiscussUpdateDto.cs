using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.DiscussDtos
{
    public class DiscussUpdateDtoForAdmin
    {
        public int DiscussId { get; set; }
        public int LessonLessonId { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

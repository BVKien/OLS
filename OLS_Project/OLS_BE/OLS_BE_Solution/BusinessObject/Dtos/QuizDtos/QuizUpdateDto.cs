using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.QuizDtos
{
    public class QuizUpdateDtoForAdmin
    {
        public string? QuizName { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class QuizBannedDtoForAdmin
    {
        public int? LessonLessonId { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.QuizDtos
{
    public class QuizCreateDtoForAdmin
    {
        public string? QuizName { get; set; }
        public int? LessonLessonId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

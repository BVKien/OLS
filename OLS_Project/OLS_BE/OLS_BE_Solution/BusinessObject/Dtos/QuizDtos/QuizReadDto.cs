using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.QuizDtos
{
    public class QuizReadDtoForCustomer
    {
        public int QuizId { get; set; }
        public string? QuizName { get; set; }
        public int? LessonLessonId { get; set; }
        public string? Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class QuizReadDtoForAdmin
    {
        public int QuizId { get; set; }
        public string? QuizName { get; set; }
        public int? LessonLessonId { get; set; }
        public string? Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

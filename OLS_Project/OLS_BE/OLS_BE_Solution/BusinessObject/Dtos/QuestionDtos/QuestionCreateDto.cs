using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.QuestionDtos
{
    public class QuestionCreateDtoForAdmin
    {
        public int QuizQuizId { get; set; }
        public string? QuestionContent { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AnswerDtos
{
    public class AnswerCreateDtoForAdmin
    {
        public string? ContentFor { get; set; }
        public int? QuestionQuestionId { get; set; }
        public int? IsTrue { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

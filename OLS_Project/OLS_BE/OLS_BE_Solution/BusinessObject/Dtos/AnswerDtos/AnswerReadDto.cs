using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.AnswerDtos
{
    public class AnswerReadDtoForCustomer
    {
        public int AnswerId { get; set; }
        public string? ContentFor { get; set; }
        public int? QuestionQuestionId { get; set; }
        public string? QuestionContent { get; set; }
        public int? IsTrue { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class AnswerReadDtoForAdmin
    {
        public int AnswerId { get; set; }
        public string? ContentFor { get; set; }
        public int? QuestionQuestionId { get; set; }
        public int? IsTrue { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

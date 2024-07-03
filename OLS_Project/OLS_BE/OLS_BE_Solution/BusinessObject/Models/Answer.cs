using System;
using System.Collections.Generic;

namespace BusinessObject.Models
{
    public partial class Answer
    {
        public int AnswerId { get; set; }
        public string? ContentFor { get; set; }
        public int? QuestionQuestionId { get; set; }
        public int? IsTrue { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual Question? QuestionQuestion { get; set; }
    }
}

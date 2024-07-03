using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.FeedBackDtos
{
    public class FeedBackUpdateDtoForCustomer
    {
        public string? FeedbackContent { get; set; }
        public string? RateStar { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

    public class FeedBackUpdateDtoReponseForCustomer
    {
        public int FeedbackId { get; set; }
        public string? FeedbackContent { get; set; }
        public string? RateStar { get; set; }
        public int? UserUserId { get; set; }
        public int? CourseCourseId { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

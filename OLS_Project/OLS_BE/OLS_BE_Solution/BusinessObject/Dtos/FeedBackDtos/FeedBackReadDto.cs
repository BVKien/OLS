using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessObject.Dtos.FeedBackDtos
{
    public class FeedBackReadDtoForCustomer
    {
        public int FeedbackId { get; set; }
        public string? FeedbackContent { get; set; }
        public string? RateStar { get; set; }
        public int? UserUserId { get; set; }
        public string? UserName { get; set; }
        public string? UserImage { get; set; }
        public int? CourseCourseId { get; set; }
        public string? CourseName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

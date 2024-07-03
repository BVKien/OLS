﻿namespace BusinessObject.Dtos.CourseDto
{
    public class CourseReadDtoForAdmin
    {
        public int CourseId { get; set; }
        public string? CourseName { get; set; }
        public string? Description { get; set; }
        public string? CourseInfomation { get; set; }
        public string? Image { get; set; }
        public string? VideoIntro { get; set; }
        public int? Fee { get; set; }
        public int? Status { get; set; }
        public int LearningPathLearningPathId { get; set; }
        public string? LearningPathName { get; set; }
        public string? LearningPathImage { get; set; }
        public int UserUserId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class CourseReadDtoForCustomer
    {
        public int CourseId { get; set; }
        public string? CourseName { get; set; }
        public string? Description { get; set; }
        public string? CourseInfomation { get; set; }
        public string? Image { get; set; }
        public string? VideoIntro { get; set; }
        public int? Fee { get; set; }
        public int? Status { get; set; }
        public string? LearningPathName { get; set; }
        public string? LearningPathImage { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

namespace BusinessObject.Dtos.LearningPathDto
{
    public class LearningPathReadDtoForAdmin
    {
        public int LearningPathId { get; set; }
        public string? LearningPathName { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public int? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

    public class LearningPathReadDtoForCustomer
    {
        public int LearningPathId { get; set; }
        public string? LearningPathName { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; }
        public int? Status { get; set; }
        public int CourseAmount { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

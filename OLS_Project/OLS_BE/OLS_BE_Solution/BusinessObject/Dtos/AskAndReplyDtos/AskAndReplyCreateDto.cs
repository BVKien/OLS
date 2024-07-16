namespace BusinessObject.Dtos.AskAndReplyDtos
{
    public class AskAndReplyCreateDtoForCustomer
    {
        public int? UserUserId { get; set; }
        public int? ReplyForAskId { get; set; }
        public string? ContentFor { get; set; }
        public string? Image { get; set; }
        public int? DiscussDiscussId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}

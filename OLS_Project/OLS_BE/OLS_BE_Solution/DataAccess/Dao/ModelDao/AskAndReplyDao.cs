using AutoMapper;
using BusinessObject.Dtos.AskAndReplyDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Dao.ModelDao
{
    public class AskAndReplyDao
    {
        private readonly IMapper _mapper;
        public AskAndReplyDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // get all ask and reply by discuss id
        // => get all conversation include asker and replier in discussion
        public List<AskAndReplyReadDtoForCustomer> GetAllAskAndReplyByDiscussId(int discussId)
        {
            var listAR = new List<AskAndReplyReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.AskAndReplies
                        .Where(ar => ar.DiscussDiscussId == discussId && ar.ReplyForAskId == null)
                        .Include(ar => ar.UserUser)
                        .OrderByDescending(ar => ar.CreatedAt)
                        .ToList();
                    listAR = _mapper.Map<List<AskAndReplyReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listAR;
        }

        // get all replies by ask id 
        public List<AskAndReplyReadDtoForCustomer> GetAllReplyByDiscussIdAndAskId(int discussId, int askId)
        {
            var replyList = new List<AskAndReplyReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.AskAndReplies
                        .Where(ar => ar.DiscussDiscussId == discussId
                        && ar.ReplyForAskId == askId)
                        .Include(ar => ar.UserUser)
                        .OrderByDescending(ar => ar.CreatedAt)
                        .ToList();
                    replyList = _mapper.Map<List<AskAndReplyReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return replyList;
        }

        // count all replies by ask id 
        public float CountAllReplyByDiscussIdAndAskId(int discussId, int askId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var quantity = context.AskAndReplies
                        .Where(ar => ar.DiscussDiscussId == discussId
                        && ar.ReplyForAskId == askId)
                        .Include(ar => ar.UserUser)
                        .Count();
                    return quantity;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // get ask detail 
        public AskAndReplyReadDtoForCustomer GetAskDetail(int arId, int discussId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var arDetail = new AskAndReplyReadDtoForCustomer();
                    var ask = context.AskAndReplies
                        .FirstOrDefault(a => a.AskId == arId
                        && a.ReplyForAskId == null
                        && a.DiscussDiscussId == discussId);
                    if (ask == null)
                    {
                        throw new Exception("Not found ask.");
                    }
                    arDetail = _mapper.Map<AskAndReplyReadDtoForCustomer>(ask);
                    return arDetail;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // get reply detail 
        public AskAndReplyReadDtoForCustomer GetReplyDetail(int arId, int discussId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var arDetail = new AskAndReplyReadDtoForCustomer();
                    var reply = context.AskAndReplies
                        .FirstOrDefault(a => a.AskId == arId
                        && a.DiscussDiscussId == discussId);
                    if (reply == null)
                    {
                        throw new Exception("Not found reply.");
                    }
                    arDetail = _mapper.Map<AskAndReplyReadDtoForCustomer>(reply);
                    return arDetail;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // ===
        // get ask and reply by ask and reply id and discuss id 
        // => get conversation detail include asker and replier in discussion
        // ===

        // create a new if field ReplyForAskID == null ? ask : reply(must be correct askId)
        public void CreateAskOrReply(AskAndReplyCreateDtoForCustomer ar)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newAr = _mapper.Map<AskAndReply>(ar);
                    context.AskAndReplies.Add(newAr);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a ask or reply  
        public void UpdateAskOrReply(int arId, int userId, int discussId, AskAndReplyUpdateDtoForCustomer ar)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var arDetail = context.AskAndReplies
                        .Include(ar => ar.UserUser)
                        .FirstOrDefault(ar => ar.AskId == arId
                        && ar.UserUserId == userId
                        && ar.DiscussDiscussId == discussId);
                    if (arDetail == null)
                    {
                        throw new Exception("Not found comment.");
                    }

                    // update 
                    _mapper.Map(ar, arDetail);

                    context.Entry(arDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a ask or reply 
        public void DeteleAskOrReply(int arId, int userId, int discussId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var arDetail = context.AskAndReplies
                        .FirstOrDefault(ar => ar.AskId == arId
                        && ar.UserUserId == userId
                        && ar.DiscussDiscussId == discussId);
                    if (arDetail == null)
                    {
                        throw new Exception("Not found comment.");
                    }

                    // rm 
                    context.AskAndReplies.Remove(arDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}

using AutoMapper;
using BusinessObject.Dtos.AskAndReplyDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
                        .Where(ar => ar.DiscussDiscussId == discussId)
                        .Include(ar => ar.UserUser)
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
                    var arCreateInfo = new AskAndReplyCreateDtoForCustomer
                    {
                        ReplyForAskId = ar.ReplyForAskId,
                        ContentFor = ar.ContentFor,
                        Image = ar.Image,
                        DiscussDiscussId = ar.DiscussDiscussId,
                        CreatedAt = ar.CreatedAt,
                        UpdatedAt = ar.UpdatedAt,
                    };
                    var newAr = _mapper.Map<AskAndReply>(arCreateInfo);
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
                        .Include(ar => ar.UserUser)
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

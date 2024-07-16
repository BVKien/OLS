using AutoMapper;
using BusinessObject.Dtos.AnswerDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class AnswerDao
    {
        private readonly IMapper _mapper;
        public AnswerDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer == 
        // get all answer by question id => get all answer of question 
        public List<AnswerReadDtoForCustomer> GetAllAnswerByQuestionIdForCustomer(int questionId)
        {
            var listAnswer = new List<AnswerReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Answers
                        .Include(a => a.QuestionQuestion)
                        .Where(a => a.QuestionQuestionId == questionId)
                        .ToList();
                    listAnswer = _mapper.Map<List<AnswerReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listAnswer;
        }

        // get answer by answre id and question id 
        public AnswerReadDtoForCustomer GetAnswerByAnswerIdAndQuestionIdForCustomer(int answerId, int questionId)
        {
            var answerDetail = new AnswerReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var answer = context.Answers
                        .Include(a => a.QuestionQuestion)
                        .FirstOrDefault(a => a.AnswerId == answerId && a.QuestionQuestionId == questionId);
                    if (answer == null)
                    {
                        throw new Exception("Not found answer.");
                    }
                    answerDetail = _mapper.Map<AnswerReadDtoForCustomer>(answer);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return answerDetail;
        }

        // check correct answer 
        public bool ChooseAnswer(int answerId, int questionId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var asnwerDetail = context.Answers
                        .FirstOrDefault(a => a.AnswerId == answerId
                        && a.QuestionQuestionId == questionId);
                    if (asnwerDetail == null)
                    {
                        throw new Exception("Not found answer.");
                    }

                    if (asnwerDetail.IsTrue == 1)
                    {
                        return true;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return false;
        }

        // == admin == 
        // get all answer by question id => get all ansewr of question 
        public List<AnswerReadDtoForAdmin> GetAllAnswerByQuestionIdForAdmin(int questionId)
        {
            var listAnswer = new List<AnswerReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Answers
                        .Include(a => a.QuestionQuestion)
                        .ToList();
                    listAnswer = _mapper.Map<List<AnswerReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listAnswer;
        }

        // get answer by answre id and question id 
        public AnswerReadDtoForAdmin GetAnswerByAnswerIdAndQuestionIdForAdmin(int answerId, int questionId)
        {
            var answerDetail = new AnswerReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var answer = context.Answers
                        .Include(a => a.QuestionQuestion)
                        .FirstOrDefault(a => a.AnswerId == answerId && a.QuestionQuestionId == questionId);
                    if (answer == null)
                    {
                        throw new Exception("Not found answer.");
                    }
                    answerDetail = _mapper.Map<AnswerReadDtoForAdmin>(answer);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return answerDetail;
        }

        // create a new answer
        public void CreateAnswer(AnswerCreateDtoForAdmin answer)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newAnswer = _mapper.Map<Answer>(answer);
                    context.Answers.Add(newAnswer);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a answer 
        public void UpdateAnswer(int answerId, int questionId, AnswerUpdateDtoForAdmin answer)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var answerDetail = context.Answers
                        .FirstOrDefault(a => a.AnswerId == answerId
                        && a.QuestionQuestionId == questionId);
                    if (answerDetail == null)
                    {
                        throw new Exception("Not found answer.");
                    }

                    // update 
                    _mapper.Map(answer, answerDetail);

                    context.Entry(answerDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a answer 
        public void DeleteAnswer(int answerId, int questionId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var answerDetail = context.Answers
                        .FirstOrDefault(a => a.AnswerId == answerId
                        && a.QuestionQuestionId == questionId);
                    if (answerDetail == null)
                    {
                        throw new Exception("Not found answer.");
                    }

                    // update 
                    context.Answers.Remove(answerDetail);
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

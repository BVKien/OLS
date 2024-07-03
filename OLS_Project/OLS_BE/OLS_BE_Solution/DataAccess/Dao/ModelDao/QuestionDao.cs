using AutoMapper;
using BusinessObject.Dtos.QuestionDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class QuestionDao
    {
        private readonly IMapper _mapper;
        public QuestionDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer == 
        // get all question by quiz => get all question in quiz 
        public List<QuestionReadDtoForCustomer> GetAllQuestionByQuizIdForCustomer(int quizId)
        {
            var listQuestion = new List<QuestionReadDtoForCustomer>();
            try
            {
                using (var conetxt = new OLS_PRN231_V1Context())
                {
                    var list = conetxt.Questions
                        .Include(q => q.QuizQuiz)
                        .Where(q => q.QuizQuizId == quizId)
                        .ToList();
                    listQuestion = _mapper.Map<List<QuestionReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listQuestion;
        }

        // get question by question id and quiz id => get question detail in quiz 
        public QuestionReadDtoForCustomer GetQuestionByQuestionIdAndQuizIdForCustomer(int questionId, int quizId)
        {
            var questionDetail = new QuestionReadDtoForCustomer();
            try
            {
                using (var conetxt = new OLS_PRN231_V1Context())
                {
                    var question = conetxt.Questions
                        .Include(q => q.QuizQuiz)
                        .FirstOrDefault(q => q.QuestionId == questionId 
                        && q.QuizQuizId == quizId);
                    if (question == null)
                    {
                        throw new Exception("Not found question.");
                    }

                    questionDetail = _mapper.Map<QuestionReadDtoForCustomer>(question);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return questionDetail;
        }

        // == admin == 
        public List<QuestionReadDtoForAdmin> GetAllQuestionByQuizIdForAdmin(int quizId)
        {
            var listQuestion = new List<QuestionReadDtoForAdmin>();
            try
            {
                using (var conetxt = new OLS_PRN231_V1Context())
                {
                    var list = conetxt.Questions
                        .Include(q => q.QuizQuiz)
                        .Where(q => q.QuizQuizId == quizId)
                        .ToList();
                    listQuestion = _mapper.Map<List<QuestionReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listQuestion;
        }

        // get question by question id and quiz id => get question detail in quiz 
        public QuestionReadDtoForAdmin GetQuestionByQuestionIdAndQuizIdForAdmin(int questionId, int quizId)
        {
            var questionDetail = new QuestionReadDtoForAdmin();
            try
            {
                using (var conetxt = new OLS_PRN231_V1Context())
                {
                    var question = conetxt.Questions
                        .Include(q => q.QuizQuiz)
                        .FirstOrDefault(q => q.QuestionId == questionId && q.QuizQuizId == quizId);
                    if (question == null)
                    {
                        throw new Exception("Not found question.");
                    }

                    questionDetail = _mapper.Map<QuestionReadDtoForAdmin>(question);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return questionDetail;
        }

        // create a new question 
        public void CreateQuestion(QuestionCreateDtoForAdmin question)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newQuestion = _mapper.Map<Question>(question);
                    context.Questions.Add(newQuestion);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a question 
        public void UpdateQuestion(int questionId, int quizId, QuestionUpdateDtoForAdmin question)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var questionDetail = context.Questions
                        .Include(q => q.QuizQuiz)
                        .FirstOrDefault(q => q.QuestionId == questionId
                        && q.QuizQuizId == quizId);
                    if (questionDetail == null)
                    {
                        throw new Exception("Not found question.");
                    }

                    // update 
                    _mapper.Map(question, questionDetail);

                    context.Entry(questionDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a question 
        public void DeleteQuestion(int questionId, int quizId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var questionDetail = context.Questions
                        .Include(q => q.QuizQuiz)
                        .FirstOrDefault(q => q.QuestionId == questionId
                        && q.QuizQuizId == quizId);
                    if (questionDetail == null)
                    {
                        throw new Exception("Not found question.");
                    }

                    // rm 
                    context.Questions.Remove(questionDetail);
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

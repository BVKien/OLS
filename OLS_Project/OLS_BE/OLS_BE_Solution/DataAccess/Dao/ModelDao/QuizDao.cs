using AutoMapper;
using BusinessObject.Dtos.QuizDtos;
using BusinessObject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Dao.ModelDao
{
    public class QuizDao
    {
        private readonly IMapper _mapper;
        public QuizDao(IMapper mapper)
        {
            _mapper = mapper;
        }

        // == customer ==
        // get all quiz by lesson id
        public List<QuizReadDtoForCustomer> GetAllQuizByLessonIdForCustomer(int lessonId)
        {
            var listQz = new List<QuizReadDtoForCustomer>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Quizzes
                        .Where(q => q.LessonLessonId == lessonId)
                        .Include(q => q.LessonLesson)
                        .ToList();
                    listQz = _mapper.Map<List<QuizReadDtoForCustomer>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listQz;
        }

        // get quiz by quiz id and lesson id -> quiz detail in lesson 
        public QuizReadDtoForCustomer GetQuizByQuizIdAndLessonIdForCustomer(int quizId, int lessonId)
        {
            var quizDetail = new QuizReadDtoForCustomer();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var quiz = context.Quizzes
                        .Include(q => q.LessonLesson)
                        .FirstOrDefault(q => q.QuizId == quizId && q.LessonLessonId == lessonId);
                    quizDetail = _mapper.Map<QuizReadDtoForCustomer>(quiz);
                    if (quizDetail == null)
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return quizDetail;
        }

        // == admin == 
        // get all quiz by lesson id
        public List<QuizReadDtoForAdmin> GetAllQuizByLessonIdForAdmin(int lessonId)
        {
            var listQz = new List<QuizReadDtoForAdmin>();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var list = context.Quizzes
                        .Where(q => q.LessonLessonId == lessonId)
                        .Include(q => q.LessonLesson)
                        .ToList();
                    listQz = _mapper.Map<List<QuizReadDtoForAdmin>>(list);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return listQz;
        }

        // get quiz by quiz id and lesson id -> quiz detail in lesson 
        public QuizReadDtoForAdmin GetQuizByQuizIdAndLessonIdForAdmin(int quizId, int lessonId)
        {
            var quizDetail = new QuizReadDtoForAdmin();
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var quiz = context.Quizzes
                        .Include(q => q.LessonLesson)
                        .FirstOrDefault(q => q.QuizId == quizId && q.LessonLessonId == lessonId);
                    if (quiz == null)
                    {
                        return null;
                    }

                    quizDetail = _mapper.Map<QuizReadDtoForAdmin>(quiz);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return quizDetail;
        }

        // create a new quiz 
        public void CreateQuiz(QuizCreateDtoForAdmin quiz)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    var newQuiz = _mapper.Map<Quiz>(quiz);
                    context.Quizzes.Add(newQuiz);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // update a quiz
        public void UpdateQuiz(int quizId, int lessonId, QuizUpdateDtoForAdmin quiz)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var quizDetail = context.Quizzes
                        .FirstOrDefault(q => q.QuizId == quizId
                        && q.LessonLessonId == lessonId);
                    if (quizDetail == null)
                    {
                        return;
                    }

                    // update 
                    _mapper.Map(quiz, quizDetail);

                    context.Entry(quizDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // delete a quiz - can not delete -> can be banned -> but missing 'status' field?
        // can change lesson id -> null -> banned 
        public void DeleteQuiz(int quizId, int lessonId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var quizDetail = context.Quizzes
                        .FirstOrDefault(q => q.QuizId == quizId
                        && q.LessonLessonId == lessonId);
                    if (quizDetail == null)
                    {
                        return;
                    }

                    // rm 
                    context.Quizzes.Remove(quizDetail);
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // banned a quiz
        public void BannedQuiz(int quizId, int lessonId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var quizDetail = context.Quizzes
                        .FirstOrDefault(q => q.QuizId == quizId
                        && q.LessonLessonId == lessonId);
                    if (quizDetail == null)
                    {
                        return;
                    }

                    var bannedInfo = new QuizBannedDtoForAdmin
                    {
                        LessonLessonId = null,
                        UpdatedAt = DateTime.Now,
                    };

                    // banned 
                    _mapper.Map(bannedInfo, quizDetail);

                    context.Entry(quizDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        // unbanned a quiz
        public void UnBannedQuiz(int quizId, int lessonId)
        {
            try
            {
                using (var context = new OLS_PRN231_V1Context())
                {
                    // find 
                    var quizDetail = context.Quizzes
                        .FirstOrDefault(q => q.QuizId == quizId
                        && q.LessonLessonId == lessonId);
                    if (quizDetail == null)
                    {
                        return;
                    }

                    var bannedInfo = new QuizBannedDtoForAdmin
                    {
                        LessonLessonId = lessonId,
                        UpdatedAt = DateTime.Now,
                    };

                    // banned 
                    _mapper.Map(bannedInfo, quizDetail);

                    context.Entry(quizDetail).State =
                        Microsoft.EntityFrameworkCore.EntityState.Modified;
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

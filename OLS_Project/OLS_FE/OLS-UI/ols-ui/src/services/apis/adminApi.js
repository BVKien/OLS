import base from './base';

// asnwer
const asnwer = {
    get_all_answer_of_question: base.url + '/api/admin/answer/get_all_answer_of_question' /*/{question_id} */,
    get_answer_detail: base.url + '/api/admin/answer/get_answer_detail' /*/{answer_id}/{question_id} */,
    create_answer: base.url + '/api/admin/answer/create_answer',
    update_answer: base.url + '/api/admin/answer/update_answer' /* /{answer_id}/{question_id} */,
    delete_answer: base.url + '/api/admin/answer/delete_answer' /*/{answer_id}/{question_id} */,
};

// course
const course = {
    get_all_course: base.url + '/api/admin/course/get_all_course',
    get_course_detail: base.url + '/api/admin/course/get_course_detail' /*/{course_id} */,
    create_course: base.url + '/api/admin/course/create_course',
    update_course: base.url + '/api/admin/course/update_course' /*/{course_id} */,
    delete_course: base.url + '/api/admin/course/delete_course' /*/{course_id} */,
};

// discuss
const discuss = {
    create_discussion: base.url + '/api/customer/discuss/create_discussion',
    delete_discussion: base.url + '/api/customer/discuss/delete_discussion' /*/{discuss_id}/{lesson_id} */,
};

// learning path
const learningPath = {
    get_all_learning_path: base.url + '/api/admin/learning_path/get_all_learning_path',
    get_learning_path_detail: base.url + '/api/admin/learning_path/get_learning_path_detail' /*/{learning_path_id} */,
    create_learning_path: base.url + '/api/admin/learning_path/create_learning_path',
    update_learning_path: base.url + '/api/admin/learning_path/update_learning_path',
    delete_learning_path: base.url + '/api/admin/learning_path/delete_learning_path',
};

// chapter
const chapter = {
    get_all_chapter_in_course: base.url + '/api/admin/chapter/get_all_chapter_in_course' /*/{course_id} */,
    get_chapter_detail: base.url + '/api/admin/chapter/get_chapter_detail' /*/{chapter_id}/{course_id} */,
    create_chapter: base.url + '/api/admin/chapter/create_chapter',
    update_chapter: base.url + '/api/admin/chapter/update_chapter' /*/{chapter_id}/{course_id} */,
    delete_chapter: base.url + '/api/admin/chapter/delete_chapter' /*/{chapter_id}/{course_id} */,
};

// lesson
const lesson = {
    get_all_lesson_in_chapter: base.url + '/api/admin/lesson/get_all_lesson_in_chapter' /*/{chapter_id} */,
    get_lesson_detail: base.url + '/api/admin/lesson/get_lesson_detail' /*/{lesson_id} */,
    create_lesson: base.url + '/api/admin/lesson/create_lesson',
    upadte_lesson: base.url + '/api/admin/lesson/upadte_lesson' /*/{lesson_id}/{chapter_id} */,
    delete_lesson: base.url + '/api/admin/lesson/delete_lesson' /* /{lesson_id}/{chapter_id} */,
};

// notification
const notification = {
    get_all_notification: base.uel + '/api/admin/notification/get_all_notification',
    get_notification_detail: base.url + '/api/admin/notification/get_notification_detail' /*/{notification_id} */,
    create_notification: base.uel + '/api/admin/notification/create_notification',
    update_notification: base.uel + '/api/admin/notification/update_notification' /*/{notification_id}/{course_id} */,
    delete_notification: base.url + '/api/admin/notification/delete_notification' /*/{notification_id}/{course_id} */,
};

// question
const question = {
    get_all_question_in_quiz: base.url + '/api/admin/question/get_all_question_in_quiz' /*/{quiz_id} */,
    get_question_detail: base.url + '/api/admin/question/get_question_detail' /*/{question_id}/{quiz_id} */,
    create_question: base.url + '/api/admin/question/create_question',
    update_question: base.url + '/api/admin/question/update_question' /*/{question_id}/{quiz_id} */,
    delete_question: base.url + '/api/admin/question/delete_question' /*/{question_id}/{quiz_id} */,
};

// quiz
const quiz = {
    get_all_quiz_in_lesson: base.url + '/api/admin/quiz/get_all_quiz_in_lesson' /*/{lesson_id} */,
    get_quiz_detail_in_lesson: base.url + '/api/admin/quiz/get_quiz_detail_in_lesson' /*/{quiz_id}/{lesson_id} */,
    create_quiz: base.url + '/api/admin/quiz/create_quiz',
    update_quiz: base.url + '/api/admin/quiz/update_quiz' /*/{quiz_id}/{lesson_id} */,
    banned_quiz: base.url + '/api/admin/quiz/banned_quiz' /*/{quiz_id}/{lesson_id} */,
    unbanned_quiz: base.url + '/api/admin/quiz/unbanned_quiz' /*/{quiz_id}/{lesson_id} */,
};

// user
const user = {
    get_all_user: base.url + '/api/admin/user/get_all_user',
    get_user_detail: base.url + '/api/admin/user/get_user_detail' /*/{user_id} */,
    create_user: base.url + '/api/admin/user/create_user',
    update_user: base.url + '/api/admin/user/update_user' /*/{user_id} */,
    ban_user: base.url + '/api/admin/user/ban_user' /*/{user_id}/{role_id} */,
    unban_user: base.url + '/api/admin/user/unban_user' /*/{user_id}/{role_id} */,
    delete_user: base.url + '/api/admin/user/delete_user' /*/{user_id}/{role_id} */,
};

// user role
const userRole = {
    get_all_user_role: base.url + '/api/admin/user_role/get_all_user_role',
    get_user_role_detail: base.url + '/api/admin/user_role/get_user_role_detail' /*/{role_id} */,
    create_user_role: base.url + '/api/admin/user_role/create_user_role',
    update_user_role: base.url + '/api/admin/user_role/update_user_role' /*/{role_id} */,
    delete_user_role: base.url + '/api/admin/user_role/delete_user_role' /*/{role_id} */,
};

// admin Api
const adminApi = {
    asnwer,
    course,
    discuss,
    learningPath,
    notification,
    chapter,
    lesson,
    question,
    quiz,
    user,
    userRole,
};

export default adminApi;

import base from './base';

// user
const user = {
    get_user_info: base.url + '/api/customer/user/get_user_info' /*/{user_id} */,
    update_user_info: base.url + '/api/customer/user/update_user_info' /*/{user_id} */,
};

// chapter
const chapter = {
    get_all_chapter_in_course: base.url + '/api/customer/chapter/get_all_chapter_in_course' /*/{course_id} */,
    get_chapter_detail: base.url + '/api/customer/chapter/get_chapter_detail' /*/{chapter_id} */,
};

// course
const course = {
    get_all_free_course: base.url + '/api/customer/course/get_all_free_course',
    get_course_detail: base.url + '/api/customer/course/get_course_detail' /*/{course_id} */,
    get_all_course_in_learning_path:
        base.url + '/api/customer/course/get_all_course_in_learning_path' /*/{learning_path_id} */,
};

// course enrolled - register course
const courseEnrolled = {
    register_free_course: base.url + '/api/customer/course_enrolled/register_free_course',
    check_course_register_by_user:
        base.url + '/api/customer/course_enrolled/check_course_register_by_user' /*/{course_id}/{user_id} */,
};

// discuss - discussion
const discuss = {
    get_discussion_detail: base.url + '/api/customer/discuss/get_discussion_detail' /*/{lesson_id} */,
};

// feedback
const feedback = {
    get_all_feed_back_in_course: base.url + '/api/customer/feed_back/get_all_feed_back_in_course' /*/{course_id} */,
    create_feed_back: base.url + '/api/customer/feed_back/create_feed_back',
    update_feed_back: base.url + '/api/customer/feed_back/update_feed_back' /*/{feed_back_id}/{course_id}/{user_id} */,
    delete_feed_back: base.url + '/api/customer/feed_back/delete_feed_back' /*/{feed_back_id}/{course_id}/{user_id} */,
};

// learning path
const learningPath = {
    get_all_learning_path: base.url + '/api/customer/learning_path/get_all_learning_path',
    get_learning_path_detail:
        base.url + '/api/customer/learning_path/get_learning_path_detail' /*/{learning_path_id} */,
};

// lesson
const lesson = {
    get_all_lesson_in_chapter: base.url + '/api/customer/lesson/get_all_lesson_in_chapter' /*/{chapter_id} */,
    get_lesson_detail: base.url + '/api/customer/lesson/get_lesson_detail' /*/{lesson_id} */,
};

// note
const note = {
    get_all_note_in_lesson_of_user:
        base.url + '/api/customer/note/get_all_note_in_lesson_of_user' /*/{lesson_id}/{user_id} */,
    get_note_detail: base.url + '/api/customer/note/get_note_detail' /*/{note_id} */,
    create_note: base.url + '/api/customer/note/create_note',
    update_note: base.url + '/api/customer/note/update_note' /*/{note_id} */,
    delete_note: base.url + '/api/customer/note/delete_note' /*/{note_id} */,
};

// notification
const notification = {
    get_all_notification_in_all_course: base.url + '/api/customer/notification/get_all_notification_in_all_course',
};

// question
const question = {
    get_all_question_in_quiz: base.url + '/api/customer/question/get_all_question_in_quiz' /*/{quiz_id} */,
    get_question_detail: base.url + '/api/customer/question/get_question_detail' /*/{question_id}/{quiz_id} */,
};

// quiz
const quiz = {
    get_all_quiz_in_lesson: base.url + '/api/customer/quiz/get_all_quiz_in_lesson' /*/{lesson_id} */,
    get_quiz_detail_in_lesson: base.url + '/api/customer/quiz/get_quiz_detail_in_lesson' /*/{quiz_id}/{lesson_id} */,
};

// aswer
const answer = {
    get_all_answer_of_question: base.url + '/api/customer/answer/get_all_answer_of_question' /*/{question_id}*/,
    get_answer_detail: base.url + '/api/customer/answer/get_answer_detail' /*/{answer_id}/{question_id} */,
    choose_answer: base.url + '/api/customer/answer/choose_answer' /*{answer_id}/{question_id} */,
};

// conversation - ask and reply
const conversation = {
    get_all_conversation_in_discussion:
        base.url + '/api/customer/conversation/get_all_conversation_in_discussion' /*/{discuss_id} */,
    get_all_reply_of_asker_in_discussion:
        base.url + '/api/customer/conversation/get_all_reply_of_asker_in_discussion' /*/{discuss_id}/{ask_id} */,
    count_all_reply_of_asker_in_discussion:
        base.url + '/api/customer/conversation/count_all_reply_of_asker_in_discussion' /*/{discuss_id}/{ask_id} */,
    /*
    get_ask_or_reply_detail:
        base.url + '/api/customer/conversation/get_ask_or_reply_detail' /{ask_id}/{reply_for_ask_id}/{discuss_id},
    */
    get_ask_detail: base.url + '/api/customer/conversation/get_ask_detail' /*/{ask_id}/{discuss_id}*/,
    get_reply_detail:
        base.url + '/api/customer/conversation/get_reply_detail' /*/{ask_id}/{reply_for_ask_id}/{discuss_id}*/,
    create_ask_or_reply: base.url + '/api/customer/conversation/create_ask_or_reply',
    update_ask_or_reply:
        base.url + '/api/customer/conversation/update_ask_or_reply' /*/{ar_id}/{user_id}/{discuss_id}*/,
    delete_ask_or_reply:
        base.url + '/api/customer/conversation/delete_ask_or_reply' /*/{ar_id}/{user_id}/{discuss_id}*/,
};

// blog comment
const blogComment = {
    get_all_comment: base.url + '/api/customer/comment/get_all_comment' /* /{blog_id} */,
    create_comment_or_reply: base.url + '/api/customer/comment/create_comment_or_reply',
    update_comment_or_reply:
        base.url + '/api/customer/comment/update_comment_or_reply' /*/{blog_comment_id}/{blog_id}/{user_id} */,
    delete_comment_or_reply:
        base.url + '/api/customer/comment/delete_comment_or_reply' /*/{blog_comment_id}/{blog_id}/{user_id} */,
};

// blog
const blog = {
    get_all_blog: base.url + '/api/customer/blog/get_all_blog',
    get_blog_detail: base.url + '/api/customer/blog/get_blog_detail' /*/{blog_id} */,
    get_my_blog_list: base.url + '/api/customer/blog/get_my_blog_list' /*/{user_id} */,
    get_all_blog_by_topic: base.url + '/api/customer/blog/get_all_blog_by_topic' /* /{blog_topic_id} */,
    create_draft_blog: base.url + '/api/customer/blog/create_draft_blog',
    update_draft_blog: base.url + '/api/customer/blog/update_draft_blog' /*/{blog_id}/{user_id} */,
    delete_draft_blog: base.url + '/api/customer/blog/delete_draft_blog' /*/{blog_id}/{user_id} */,
};

// blog topic
const blogTopic = {
    get_all_blog_topic: base.url + '/api/customer/blog_topic/get_all_blog_topic',
};

// save blog
const saveBlog = {
    get_all_blog_saved: base.url + '/api/customer/save_blog/get_all_blog_saved' /*/{user_id} */,
    save_blog: base.url + '/api/customer/save_blog/save_blog',
    unsave_blog: base.url + '/api/customer/save_blog/unsave_blog' /*/{blog_id}/{user_id} */,
};

// customerApi
const customerApi = {
    user,
    answer,
    quiz,
    question,
    notification,
    note,
    lesson,
    learningPath,
    feedback,
    discuss,
    courseEnrolled,
    course,
    chapter,
    conversation,
    blogTopic,
    blog,
    blogComment,
    saveBlog,
};

export default customerApi;

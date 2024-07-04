import base from './base';

// blog
const blog = {
    get_all_blog: base.url + '/api/expert/blog/get_all_blog',
    get_blog_detail: base.url + '/api/expert/blog/get_blog_detail' /*/{blog_id} */,
    get_user_blog_list: base.url + '/api/expert/blog/get_user_blog_list' /*/{user_id} */,
    create_blog: base.url + '/api/expert/blog/create_blog',
    update_blog: base.url + '/api/expert/blog/update_blog' /*/{blog_id}/{user_id} */,
    delete_blog: base.url + '/api/expert/blog/delete_blog' /*/{blog_id}/{user_id} */,
    approve_blog: base.url + '/api/expert/blog/approve_blog' /*/{blog_id}/{user_id} */,
    banned_blog: base.url + '/api/expert/blog/banned_blog' /*/{blog_id}/{user_id} */,
};

// blog topic
const blogTopic = {
    get_all_blog_topic: base.url + '/api/expert/blog_topic/get_all_blog_topic',
    get_blog_topic_detail: base.url + '/api/expert/blog_topic/get_blog_topic_detail' /*/{blog_topic_id} */,
    create_blog_topic: base.url + '/api/expert/blog_topic/create_blog_topic',
    update_blog_topic: base.url + '/api/expert/blog_topic/update_blog_topic' /*/{blog_topic_id} */,
    delete_blog_topic: base.url + '/api/expert/blog_topic/delete_blog_topic' /*/{blog_topic_id} */,
};

// expert Api
const expertApi = {
    blog,
    blogTopic,
};

export default expertApi;

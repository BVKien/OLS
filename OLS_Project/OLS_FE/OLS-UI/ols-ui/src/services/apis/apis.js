const base = {
    url: 'https://localhost:7003',
};

const customerApis = {
    // home page
    get_all_free_course: base.url + '/api/customer/course/get_all_free_course',
    get_course_detail: base.url + '/api/customer/course/get_course_detail',
    get_all_blog: base.url + '/api/customer/blog/get_all_blog',
    get_all_learning_path: base.url + '/api/customer/learning_path/get_all_learning_path',
    get_learning_path_detail: base.url + '/api/customer/learning_path/get_learning_path_detail',
};

const apis = {
    customerApis,
};

export default apis;

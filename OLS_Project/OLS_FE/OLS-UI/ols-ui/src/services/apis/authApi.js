import base from './base';

// auth
const auth = {
    login: base.url + '/api/auth/login',
    register: base.url + '/api/auth/register',
    send_verification_code: base.url + '/api/auth/send_verification_code',
    verify_code: base.url + '/api/auth/verify_code',
    reset_password: base.url + '/api/auth/reset_password',
};

// auth Api
const authApi = {
    auth,
};

export default authApi;

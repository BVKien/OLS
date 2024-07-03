// libs
import axios from 'axios';

// cài biến môi trường - lấy api
// test log
//console.log(process.env);

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

// post
// put
// path
// delete
// ...

export default httpRequest;

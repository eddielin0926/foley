import _axios from "axios"

const axios = () => {
    //建立一個自定義的axios
    const instance = _axios.create({
            baseURL: 'http://localhost:3000',
            headers: { 'Content-Type': 'application/json' },
        });
    
    // instance.interceptors.response.use(
    //   (response) => {
    //     return response;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );    
    return instance;
}

export {axios};
export default axios();
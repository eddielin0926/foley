import _axios from "axios"

const axios = () => {
    //建立一個自定義的axios
    const instance = _axios.create({
            // ngrok url 記得改
            baseURL: 'http://d358-111-255-254-170.ngrok.io',
            headers: { 'Content-Type': 'application/json' },
        });
    
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );    
    return instance;
}

export {axios};
export default axios();
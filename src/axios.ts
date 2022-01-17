import _axios from "axios";

const axios = () => {
  //建立一個自定義的axios
  const instance = _axios.create({
    // ngrok url 記得改
    baseURL: "http://ee34-140-116-1-141.ngrok.io",
    headers: { "Content-Type": "application/json" },
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
};

export { axios };
export default axios();

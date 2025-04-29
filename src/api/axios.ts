import axios from "axios";
import { Alert, Platform } from "react-native";

const axiosInstance = axios.create({
  baseURL:
    Platform.OS === "android"
      ? "http://10.0.2.2:3030"
      : "http://localhost:3030",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401) {
    Alert.alert("인증되지 않음", "인증되지 않은 사용자입니다.");
  } else if (error.response && error.response.status === 404) {
    Alert.alert("요청이 잘못됨", "요청형식이 잘못되었거나 찾을 수 없습니다.");
  } else if (error.response && error.response.status === 500) {
    Alert.alert("서버 이상", "잠시 후 다시 시도해주세요.");
  }

  return Promise.reject(error);
});

export default axiosInstance;

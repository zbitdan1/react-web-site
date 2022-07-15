import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {    
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getLogin() {
    return instance.get(`auth/me`);
  },    
  getProfile() {
    return instance.get(`profile/2`).then((response) => response.data);
  },
};

export const authMe = {
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post('auth/login', { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete('auth/login');
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url')
  }
}

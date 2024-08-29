import req from '@/lib/req';

const authApi = {
    login: (credentials) => req.post('/login', credentials),
    logout: () => req.post('/logout'),
    check: (credentials) => req.post('/check', credentials),
    register: (credentials) => req.post('/register', credentials),
    forgetPassword: (credentials) => req.post('/forget-password', credentials),
    checkPassword: (credentials) => req.post('/check/password', credentials),
    resetPassword: (credentials) => req.post('/reset-password', credentials),
  
  
  };
  
  
  export default authApi;
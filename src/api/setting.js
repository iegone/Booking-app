import req from '@/lib/req';

const settingApi = {
    main: (credentials) => req.get('/settings', credentials),
  

  };
  
  
  export default settingApi;
import authHeader from './auth-header.js'
const API_URL = "https://reqres.in/api/";

class RestService {
    async get(method) {
        const response = await fetch(API_URL + method, {
            headers: {
                'Authorization': authHeader()
            },
        });   
        const jsonObj = await response.json();
        return jsonObj;     
    }

    async post(method, body) {
      const response = await fetch(API_URL + method, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authHeader()
                },
            body: JSON.stringify(body)
      });

      const jsonObj = await response.json();
      return jsonObj;          
  }
}
export default new RestService();

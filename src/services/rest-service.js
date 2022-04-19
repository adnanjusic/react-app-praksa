const API_URL = "https://reqres.in/api/";

class RestService {
    async get(method) {
        const response = await fetch(API_URL + method);   
        const jsonObj = await response.json();
        return jsonObj;     
    }

    async post(method, body) {
      const response = await fetch(API_URL + method, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(body)
      });

      const jsonObj = await response.json();
      return jsonObj;          
  }
}
export default new RestService();

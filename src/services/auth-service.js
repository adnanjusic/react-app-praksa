import api  from '../services/rest-service.js'

class AuthService {
    async login(email, password) {
        const data = await api.post("login", {email, password});
    
        if (data.token) {
            localStorage.setItem("user", JSON.stringify({email: email}));
            localStorage.setItem("token", JSON.stringify(data.token));
            return true;
        }
        return false;        
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();

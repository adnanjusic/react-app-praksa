import RestService  from '../services/rest-service.js'

class UsersService {
    async getAll() {
        const data = await RestService.get("users");
        return data.data;        
  }
}
export default new UsersService();

import axios from "@/plugins/http";

const user = {
  login ({ username, password }) {
    return axios.post('/login', {
      username,
      password
    })
  },

  auth_token () {
    return axios.get('/admin/auth_token');
  }
}

export default user;
import axios from "@/plugins/http";

const user = {
  login ({ username, password }) {
    return axios.post('/login', {
      username,
      password
    })
  },

  authToken () {
    return axios.get('/admin/auth_token');
  }
}

export default user;
import axios from '@/plugins/http';

const user = {
    login({ username, password }) {
        return axios.post('/login', {
            username,
            password
        });
    },

    authToken() {
        return axios.get('/admin/auth_token');
    },

    setWebInfo(websiteName, description, master) {
        return axios.post('/website_info', {
            websiteName,
            description,
            master
        });
    },

    getWebInfo() {
        return axios.get('/website_info');
    }
};

export default user;

import axios from "@/plugins/http";

const category = {
  // 新增类别
  add (cate) {
    cate = cate || 'unknown category'
    return axios.post(`/admin/category`, null, { params: {
      cate
    }})
  },

  // 显示所有类别
  show () {
    return axios.get('/category');
  }
}

export default category;
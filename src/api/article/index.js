import axios from "@/plugins/http";

const article = {
  // 上传md文件
  upload (mdfile, tag, category, createdAt) {
    let Form = new FormData();
    Form.append('mdfile', mdfile);
    createdAt = createdAt || mdfile.lastModifiedDate;
    tag = tag || '未知标签';
    category = category || '未分类';
    let config = {
      headers: {'Content-Type': 'multipart/form-data'},
      params: {
        tag: tag,
        category: category,
        createdAt: createdAt,
      }
    }
    return axios.post(`/article`, Form, config);
  },

  // 获取文章列表
  getList (page, limit) {
    page = page || 1;
    limit = limit || 5;
    let config = {
      params: {
        page,
        limit,
      }
    }
    return axios.get('/article/list', config);
  },

  // 删除文章
  delete (id) {
    return axios.delete(`/article/${id}`);
  },

  // 获取文章内容
  getArticle (id) {
    return axios.get(`/article/${id}`);
  },

  // 获取总页数
  getTotalPage ({limit = 5} = {}) {
    
    let config = {
      params : {
        limit
      }
    }
    
    return axios.get('/article/total_page', config);
  },

}

export default article;
/* eslint-disable */
import axios from 'axios';


export  const uploadMdFile = (file) => {
  let Form = new FormData();
  Form.append('mdFile', file);
  //将文件的修改时间作为文章的创建时间
  Form.append('createdAt', file.lastModifiedDate);
  let config = {
    headers: {'Content-Type': 'multipart/form-data'}
  }

  return axios.post('/admin/upload/file', Form, config);
}

export const uploadMdInfo = (article_id, category, tags) => axios.post('/admin/upload/info', {
  article_id,
  category,
  tags
})

export const updateMdFile = (id, file) => {
  let Form = new FormData();
  Form.append('mdFile', file);
  Form.append('id', id);

  let config = {
    headers: {'Content-Type': 'multipart/form-date'}
  }

  return axios.post('/admin/update/file', Form, config);

}

export const removeMd = (id) => axios.get(`/admin/remove/article/${id}`)

export const Login = (username, password) => axios.post('/v0/login', {
  username, 
  password
})
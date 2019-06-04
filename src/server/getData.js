import axios from "axios";

export const getArticleList = () => axios.get("/admin/article/list");

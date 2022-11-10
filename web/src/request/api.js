import instance from "./request";
// 上传图片
export const getNewsCats = () => instance.get('/news/list')
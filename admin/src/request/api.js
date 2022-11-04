import instance from "./request";

export const addCategory = (params) => instance.post('/admin/api/categories', params)
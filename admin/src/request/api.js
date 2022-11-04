import instance from "./request";

export const addCategory = (params) => instance.post('/admin/api/categories', params)

export const getCategoryList = () => instance.get('/admin/api/categories')

export const getCategoryById = (params) => instance.get(`/admin/api/categories/${params}`)

export const upateCategoryById = (params, id) => instance.put(`/admin/api/categories/${id}`, params)

export const removeCategoryById = (id) => instance.delete(`/admin/api/categories/${id}`)
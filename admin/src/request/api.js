import instance from "./request";

export const addCategory = (params) => instance.post('/rest/categories', params)

export const getCategoryList = () => instance.get('/rest/categories')

export const getCategoryById = (params) => instance.get(`/rest/categories/${params}`)

export const upateCategoryById = (params, id) => instance.put(`/rest/categories/${id}`, params)

export const removeCategoryById = (id) => instance.delete(`/rest/categories/${id}`)

export const addItem = (params) => instance.post('/rest/items', params)

export const getItemList = () => instance.get('/rest/items')

export const getItemById = (params) => instance.get(`/rest/items/${params}`)

export const upateItemById = (params, id) => instance.put(`/rest/items/${id}`, params)

export const removeItemById = (id) => instance.delete(`/rest/items/${id}`)

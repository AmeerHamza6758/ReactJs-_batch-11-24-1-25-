import Api from "./API";

export const getAllPosts = async() => await Api.get('/posts')
export const getAllComments = () => Api.get('/comments')

// Post
export const postFormData = (data) => Api.post('/posts', data)

// update
export const updateFormData = (id, data) => Api.put(`/posts${id}`)

export const deleteFormData = (id) => Api.delete(`/posts${id}`)

// Users``
export const getAllUsers =()=>Api.get('/users')
export const deleteUserById=(id)=>Api.delete(`/users/${id}`)
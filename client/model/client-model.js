import axios from 'axios'
import {createError} from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        reject(createError(400, 'no data'))
      }
      if (!data.success) {
        reject(createError(400, data.msg))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}
export default {
  getAllTodos () {
    console.log('getAl')
    return handleRequest(request.get('/api/todos'))
  },
  login (username, password) {
    console.log(username, password)
    return handleRequest(request.post('/user/login', {username, password}))
  },
  updateTodo (id, todo) {
    console.log(todo, 'todo1')
    return handleRequest(request.put(`/api/todo/${id}`, todo))
  },
  createTodo (todo) {
    console.log(10001, todo)
    return handleRequest(request.post('/api/todo', todo))
  },
  deleteTodo (id) {
    return handleRequest(request.delete(`/api/todo/${id}`))
  },
  deleteAllCompleted (ids) {
    return handleRequest(request.post('/api/delete/completed', { ids }))
  }
}

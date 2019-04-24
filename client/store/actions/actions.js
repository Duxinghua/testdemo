import model from 'model'
import notify from '../../components/notification/function'

import bus from '../../util/bus'
const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: 'please login'
    })
    bus.$emit('auth')
  }
}
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num: data.num
      })
    }, data.time)
  },
  fetchTodos ({commit}) {
    console.log('11')
    commit('startLoading')
    return model.getAllTodos()
      .then(data => {
        commit('endLoading')
        commit('fillTodos', data)
      })
      .catch(err => {
        console.log('err s')
        handleError(err)
        commit('endLoading')
      })
  },
  login ({commit}, {username, password}) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('startLoading')
          commit('doLogin', data)
          notify({
            content: 'success'
          })
          resolve()
        }).catch(err => {
          handleError(err)
          reject(err)
          commit('endLoading')
        })
    })
  },
  addTodo ({commit}, todo) {
    model.createTodo(todo)
      .then(data => {
        commit('addTodo', data)
        notify({
          content: 'add todo'
        })
      }).catch(err => {
        handleError(err)
      })
  },
  updateTodo ({commit}, {id, todo}) {
    console.log(todo)
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('updateTodo', {id, todo: data})
        // notify({
        //   content: 'update todo'
        // })
        commit('endLoading')
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  deleteTodo ({commit}, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('endLoading')
        commit('deleteTodo', id)
        notify({
          content: 'delete todo'
        })
      }).catch(err => {
        handleError(err)
        commit('endLoading')
      })
  },
  deleteAllCompleted ({commit, state}) {
    const ids = state.todos.filter(t => t.completed).map(t => {
      return t.id
    })
    commit('startLoading')
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('endLoading')
        commit('deleteAllCompleted')
        notify({
          content: 'clear todo'
        })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  }
}

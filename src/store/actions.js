import { userService, adminService } from '../_services'
import router from '../router/index'

export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  login ({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username })

    userService.login(username, password)
      .then(
        user => {
          commit('loginSuccess', user)
          if (user.data.role) router.push('/addbooks')
          else router.push('/books')
        },
        error => {
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
    router.push('/')
  },
  getAllBooks: ({ dispatch, commit }) => {
    userService.getAllBooks()
      .then(
        response => {
          console.log(response)
          localStorage.setItem('allBooks', JSON.stringify(response))
          // return response
          commit('all books retrieved', response)
          dispatch('alert/success', 'Books are retrieved successfully', { root: true })
          // location.reload(true)
        },
        error => {
          commit('get all books failure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  addbook: ({ dispatch, commit }, book) => {
    // commit('appendPet', book)
    console.log(book)
    console.log(userService)
    console.log(adminService)
    adminService.addbook(book)
      .then(
        book => {
          this.getAllBooks()
          commit('book added', book)
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Book add successful', { root: true })
          })
        },
        error => {
          commit('book add failure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  register ({ dispatch, commit }, user) {
    commit('registerRequest', user)

    userService.register(user)
      .then(
        user => {
          commit('registerSuccess', user)
          router.push('/')
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

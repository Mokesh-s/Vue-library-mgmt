import cats from '../data/cats'
import dogs from '../data/dogs'
import bookList from '../data/bookList'

const user = JSON.parse(window.localStorage.getItem('user'))
let status = {}
if (user) status = { loggedIn: true }

// const state = user
//   ? { status: { loggedIn: true }, user }
//   : { status: {}, user: null }

export default {
  cats,
  dogs,
  bookList,
  pets: [...cats, ...dogs],
  user,
  status
}


export const config = {
  apiUrl: 'http://localhost:4000'
}

export function authHeader () {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}

export const userService = {
  login,
  logout,
  register,
  getAllBooks,
  getAll,
  getById,
  update,
  delete: _delete,
  handleResponse
}

function login (email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }

  return fetch(`${config.apiUrl}/api/auth`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function register (user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`${config.apiUrl}/api/users`, requestOptions).then(handleResponse)
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function getAllBooks () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/api/getallbooks`, requestOptions).then(handleResponse)
}

function getById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

function update (user) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }

  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

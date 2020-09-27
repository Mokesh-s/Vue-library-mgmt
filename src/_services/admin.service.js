
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

export const adminService = {
  addbook
}

function addbook (book) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ book_id: book.book_id, title: book.title, author_name: book.author_name, cost: book.cost })
  }
  return fetch(`${config.apiUrl}/api/addbook`, requestOptions).then(handleResponse)
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


export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ERROR = "ERROR"

export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const logout = () => ({
  type: LOGOUT
})

export const error = () =>({
  type: ERROR
})

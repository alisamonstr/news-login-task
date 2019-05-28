export const LOADING = "LOADING"
export const PROFILE = "PROFILE"

export const profile = info => ({
  type: PROFILE,
  payload: info
})
export const loading = () => ({
  type: LOADING
})

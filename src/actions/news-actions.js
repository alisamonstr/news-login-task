export const GET_NEWS = "GET_NEWS"
export const LOADING = "LOADING"

export const getNews = news => ({
  type: GET_NEWS,
  payload: news
})

export const loading = () => ({
  type: LOADING
})

import { api } from "./api"

export const getContinents = () => {
  return api.get('/continents')
    .then(res => res.data)
}

export const getContinentById = (id: string) => {
  return api.get(`/continents/${id}`)
    .then(res => res.data)
}
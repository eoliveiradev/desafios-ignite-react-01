import { AxiosResponse } from "axios"

export const handleResponse = (expectedStatus: number[]) => {
  return (response: AxiosResponse<any>) => {
    if (!expectedStatus.includes(response.status)) {
      throw new Error(response.data.error)
    }

    return response.data
  }
}
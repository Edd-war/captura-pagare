import axios, { type AxiosResponse } from 'axios'

const API_URL = 'https://api.example.com/customers'

export function fetchCustomers(): Promise<any> {
  return axios.get(API_URL).then((response: AxiosResponse<any, any>) => response.data)
}

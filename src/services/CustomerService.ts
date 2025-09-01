import type { Movimiento } from '@/models/movimiento'
import axios, { type AxiosResponse } from 'axios'

const API_URL = 'https://api.example.com/customers'

export function fetchCustomers(cliente: string, recibo: boolean): Promise<Movimiento[]> {
    return axios
        .get(API_URL, {
            params: {
                cliente,
                recibo,
            },
        })
        .then((response: AxiosResponse<any, any>) => response.data)
}

export interface Movimiento {
    id: number
    numeroCliente: string
    nombre: string
    movimiento: string
    consecutivo: string | number
    importe: number
    fechaEmision: Date | string
    recibo: string | boolean
}

export type FiltrosMovimiento = Pick<Movimiento, 'numeroCliente' | 'recibo'>

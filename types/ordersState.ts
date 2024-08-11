import { Order } from "./order"

export type OrdersState = {
    orders: Order[],
    error?: string
}


export type Action = {type:"setOrders", payload: Order[]} | {type:"error", payload: string}

import { Driver } from "./driver"

export type DriversState = {
    drivers: Driver[],
    error?: string
}

export type Action = { type: 'setDrivers'; payload: Driver[] } | { type: 'error'; payload: string };

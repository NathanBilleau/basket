import { IProvider } from './provider'

export interface IProduct {
    id: string
    name: string
    price: number
    provider: IProvider
}

export interface ICPU extends IProduct {
    cores: number // number of cores
    clockSpeed: number // in GHz
}

export interface IGPU extends IProduct {
    memory: number  // in GB
    clockSpeed: number // in MHz
}

export interface IRAM extends IProduct {
    capacity: number // in GB
}

export interface IHDD extends IProduct {
    capacity: number // in GB
    speed: number // mbps
}
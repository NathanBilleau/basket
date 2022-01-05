import { IUser } from './user'
import { IProduct } from './product'

export interface ICartItem {
    id: string
    product: IProduct
    quantity: number
}

export interface ICart {
    id: string
    items?: ICartItem[]
    user: IUser
    add: (product: IProduct, quantity: number) => void
    remove: (product: IProduct) => void
    total: () => number
}
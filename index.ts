import uuidv4 from 'uuidv4'
import { Omit } from 'utility-types'

import { ICart } from "./interfaces/cart"
import { IUser } from "./interfaces/user"
import { ICPU, IHDD, IProduct, IRAM, IGPU } from "./interfaces/product"
import { IProvider } from './interfaces/provider'

const createBasket = ({ user }: { user: IUser }): ICart => {

    let items: ICart['items'] = []

    const add: ICart['add'] = (product: IProduct, quantity: number) => {
        items.push({
            id: uuidv4.uuid(),
            product,
            quantity
        })
    }

    const remove: ICart['remove'] = (product: IProduct) => {
        items = items.filter(item => item.product.id !== product.id)
    }

    const total: ICart['total'] = (): number => {
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    }
    
    const basket: ICart = {
        id: uuidv4.uuid(),
        user,
        items,
        add,
        remove,
        total
    }

    return basket
}

const createUser = (userInput: Omit<IUser, 'id'>): IUser => {
    const user: IUser = {
        ...userInput,
        id: uuidv4.uuid()
    }

    return user
}

const createProduct = (productInput: Omit<ICPU, 'id'> | Omit<IRAM, 'id'> | Omit<IGPU, 'id'> | Omit<IHDD, 'id'>): IProduct => {
    const product: IProduct = {
        ...productInput,
        id: uuidv4.uuid()
    }

    return product
}

const createProvider = (providerInput: Omit<IProvider, 'id'>): IProvider => {
    const provider: IProvider = {
        ...providerInput,
        id: uuidv4.uuid()
    }

    return provider
}

const user = createUser({
    name: 'John Doe',
    address: '123 Main St.',
    email: 'john.doe@mail.com'
})

const basket = createBasket({
    user
})


const logitech = createProvider({
    name: 'logitech',
    delay: 3
})

const mxMaster3 = createProduct({
    name: 'MX Master 3',
    price: 300,
    provider: logitech,
    cores: 2,
    clockSpeed: 1.2
})

basket.add(mxMaster3, 2)
import uuidv4 from 'uuidv4'
import { Optional } from 'utility-types'

import { ICart } from "./interfaces/cart"
import { IUser } from "./interfaces/user"
import { IProduct } from "./interfaces/product"
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

const createUser = (userInput: Optional<IUser, 'id'>): IUser => {
    const user: IUser = {
        ...userInput,
        id: uuidv4.uuid()
    }

    return user
}

const createProduct = (productInput: Optional<IProduct, 'id'>): IProduct => {
    const product: IProduct = {
        ...productInput,
        id: uuidv4.uuid()
    }

    return product
}

const createProvider = (providerInput: Optional<IProvider, 'id'>): IProvider => {
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


const apple = createProvider({
    name: 'Apple',
    delay: 3
})

const m1 = createProduct({
    name: 'Apple Silicon M1',
    price: 300,
    provider: apple
})

basket.add(m1, 2)
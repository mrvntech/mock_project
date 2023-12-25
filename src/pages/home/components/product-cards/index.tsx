import { useState } from "react"
import ProductCard from "./ProductCard"
import './style.scss'

export interface ProductCard {
    id: number,
    name: string,
    imageUrl: string,
    rate: number,
    sale?: number,
    price: number,
    state: string
}

export default function ProductCards() {
    const [products, setProducts] = useState<ProductCard[]>([
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 4,
            price: 120.000,
            state: 'Avilable'
        },
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 5,
            price: 120.000,
            state: 'Avilable'
        },
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 5,
            sale: 50,
            price: 120.000,
            state: 'Avilable'
        },
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 5,
            price: 120.000,
            state: 'Avilable'
        },
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 5,
            price: 120.000,
            state: 'Avilable'
        },
        {
            id: 123,
            name: 'Adidas Shoes',
            imageUrl: '/product-photo.svg',
            rate: 5,
            price: 120.000,
            state: 'Avilable'
        },
    ])
    return (
        <div className="product-cards">
            {
                products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))
            }
        </div>
    )
}
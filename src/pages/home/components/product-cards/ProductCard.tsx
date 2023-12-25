import { useEffect, useState } from "react";
import { ProductCard } from ".";

export default function ProductCard({ product }: { product: ProductCard }) {
    return (
        <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt="" className="image" />
            <div className="properties">
                <div className="name">{product.name}</div>
                <div className="id">ID: {product.id}</div>
                <div className="flex justify-between">
                    <div className="rate">{(() => {
                        const [star, setStar] = useState<boolean[]>([])
                        useEffect(() => {
                            const arr = []
                            for (let i = 0; i < product.rate; i++) {
                                arr.push(true)
                            }
                            setStar(arr)
                        }, [])
                        return (<>
                            {star.map(element => {
                                return <img src="/star-fill.svg" alt="" />
                            })}
                        </>
                        )
                    })()}</div>
                    <div className="sale">{product.sale}% Off</div>
                </div>
                <div className="flex justify-between">
                    <div className="price">$ {product.price}</div>
                    <img src="/card-icon.svg" alt="" />
                </div>
                <div className="state">
                    <div className="text">
                        {product.state}
                    </div>
                </div>
            </div>
        </div>
    )
}
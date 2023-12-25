import { useEffect, useState } from "react";
import { ProductCard } from ".";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../stores";
import { setIsOpenLoginPopup } from "../../../../stores/popup";

export default function ProductCard({ product }: { product: ProductCard }) {
    const isAuthentication = useSelector((state: RootState) => state.authentication.isAuthentication)
    const dispatch = useDispatch()
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
                    <img src="/card-icon.svg" alt="" onClick={() => {
                        if (!isAuthentication) dispatch(setIsOpenLoginPopup(true))
                    }} />
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
import { useState } from "react"
import "./style.scss"

interface Category {
    id: number,
    name: string,
}
export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([
        {
            id: 1,
            name: 'Computer'
        },
        {
            id: 1,
            name: 'Hand Tools'
        },
        {
            id: 1,
            name: 'Machine Tools'
        },
        {
            id: 1,
            name: 'Power Tools'
        },
        {
            id: 1,
            name: 'Storage Tools'
        },
        {
            id: 1,
            name: 'Clothes & PPE'
        },
        {
            id: 1,
            name: 'Electrical'
        },
        {
            id: 1,
            name: 'Building Tools'
        },
        {
            id: 1,
            name: 'Foods'
        },
        {
            id: 1,
            name: 'Drinks'
        },
    ]
    )
    return (
        <div className="navigation">
            <div className="label">
                <img src="white-menu-icon.svg" className="icon" />
                <div className="text">Categories</div>
            </div>
            {categories.map(category => (
                <div className="category" key={category.id}>
                    <div className="text">{category.name}</div>
                    <img src="Vector.svg" alt="" className="icon" />
                </div>
            ))}
        </div>
    )
}
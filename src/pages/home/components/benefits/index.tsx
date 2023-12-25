import { useState } from "react"
import "./style.scss"

interface Benefit {
    id: number,
    iconUrl: string,
    name: string,
    content: string
}

export default function Benefits() {
    const [benefits, setBenefits] = useState<Benefit[]>([
        {
            id: 1,
            iconUrl: '/ship-icon.svg',
            name: 'Free ship',
            content: 'For orders from 50%'
        },
        {
            id: 1,
            iconUrl: '/ship-icon.svg',
            name: 'Free ship',
            content: 'For orders from 50%'
        },
        {
            id: 1,
            iconUrl: '/ship-icon.svg',
            name: 'Free ship',
            content: 'For orders from 50%'
        },
        {
            id: 1,
            iconUrl: '/ship-icon.svg',
            name: 'Free ship',
            content: 'For orders from 50%'
        },
        {
            id: 1,
            iconUrl: '/ship-icon.svg',
            name: 'Free ship',
            content: 'For orders from 50%'
        },
    ]
    )
    return (
        <div className="benefits">
            {benefits.map(item => (
                <div className="item">
                    <img src={item.iconUrl} alt="" />
                    <div className="text">
                        <div className="name">{item.name}</div>
                        <div className="content">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
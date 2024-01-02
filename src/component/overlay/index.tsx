import { ReactNode } from "react";
import './style.scss'

export default function Overlay({ children }: { children: ReactNode }) {
    return (
        <div className="overlay">
            <div className="content">
                {children}
            </div>
        </div>
    )
}
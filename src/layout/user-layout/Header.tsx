import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="top-bar">
                <div className="max-w-6xl m-auto flex gap-2">
                    <Link to={"/about-us"}>About Us</Link>
                    <Link to={"/contacts"}>Contacts</Link>
                    <Link to={"/store"} >Store</Link>
                    <Link to={"/track-orders"} >Track Orders</Link>
                </div>
            </div>
            <div className="main-bar">
                <div className="max-w-6xl m-auto">main bar</div>
            </div>
        </>
    )
}
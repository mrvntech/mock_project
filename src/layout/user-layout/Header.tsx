import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../stores";
import { setIsOpenLoginPopup } from "../../stores/popup";

export default function Header() {
    const dispatch = useDispatch()
    const isAuthentication = useSelector((state: RootState) => state.authentication.isAuthentication)
    const navigate = useNavigate()
    return (
        <div className="top-bar">
            <div className="top-bar">
                <div className="max-w-6xl m-auto flex gap-2">
                    <Link to={"/about-us"}>About Us</Link>
                    <Link to={"/contacts"}>Contacts</Link>
                    <Link to={"/store"} >Store</Link>
                    <Link to={"/track-orders"} >Track Orders</Link>
                </div>
            </div>
            <div className="main-bar">
                <div className="max-w-6xl m-auto content">
                    <Link to={"/"} className="name">SHOP APP</Link>
                    <div className="flex search-form justify-between">
                        <div className="content flex gap-3">
                            <img src="/menu-icon.svg" className="icon" />
                            <div>Category</div>
                            <div className="line" />
                            <input className="field" type="text" placeholder="Search Items" />
                        </div>
                        <div className="action">
                            <img src="./search-icon.svg" className="icon" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img src="/cart-icon.svg" onClick={() => {
                            if (!isAuthentication) dispatch(setIsOpenLoginPopup(true))
                            else navigate("/cart")
                        }} />
                        {isAuthentication ? <img src="/user-image.svg"></img> : <img src="/user-icon.svg" onClick={() => { if (!isAuthentication) dispatch(setIsOpenLoginPopup(true)) }} />}
                    </div>
                </div>
            </div>
        </div>
    )
}
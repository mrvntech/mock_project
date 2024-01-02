import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setIsOpenLoginPopup } from "../../../stores/popup";
import { RootState } from "../../../stores";
import "./style.scss"

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
                    <div className="flex gap-4 relative">
                        <div className="cart-icon">
                            <img className="icon" src="/cart-icon.svg" onClick={() => {
                                if (!isAuthentication) dispatch(setIsOpenLoginPopup(true))
                                else navigate("/cart")
                            }} />
                            <div className="cart">
                                <div className="cart-content">
                                    cart
                                </div>
                            </div>
                        </div>
                        <div className="user-icon">
                            {isAuthentication ? <>
                                <img className="icon" src="/user-image.svg"></img>
                                <div className="navigation">user navigation</div>
                            </> :
                                <img className="icon" src="/user-icon.svg" onClick={() => { if (!isAuthentication) dispatch(setIsOpenLoginPopup(true)) }} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
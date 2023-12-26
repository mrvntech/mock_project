import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import './style.scss'
import LoginPopup from "./popup/login";
import RegisterPopup from "./popup/register";
import ForgotPasswordPopup from "./popup/forgotpassword";
import { useSelector } from "react-redux";
import { RootState } from "../../stores";

export default function UserPageLayout() {
    const isOpenLoginPopup = useSelector((state: RootState) => state.popup.isOpenLoginPopup)
    const isOpenForgotPasswordPopup = useSelector((state: RootState) => state.popup.isOpenForgotPasswordPopup)
    const isOpenRegisterPopup = useSelector((state: RootState) => state.popup.isOpenRegisterPopup)
    return (
        <>
            <div className="page-layout">
                <Header />
                <Main>
                    <Outlet />
                </Main>
            </div>
            {isOpenLoginPopup ? <LoginPopup /> : <></>}
            {isOpenForgotPasswordPopup ? <ForgotPasswordPopup /> : <></>}
            {isOpenRegisterPopup ? <RegisterPopup /> : <></>}
        </>
    )
}
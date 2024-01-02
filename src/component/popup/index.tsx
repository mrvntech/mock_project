import { useSelector } from "react-redux"
import ForgotPasswordPopup from "./forgotpassword"
import LoginPopup from "./login"
import RegisterPopup from "./register"
import { RootState } from "../../stores"
import LoadingPopup from "../loading"

export default function Popup() {
    const isOpenLoginPopup = useSelector((state: RootState) => state.popup.isOpenLoginPopup)
    const isOpenForgotPasswordPopup = useSelector((state: RootState) => state.popup.isOpenForgotPasswordPopup)
    const isOpenRegisterPopup = useSelector((state: RootState) => state.popup.isOpenRegisterPopup)
    const isInitilized = useSelector((state: RootState) => state.init.isInitilized)
    return (
        <>
            {!isInitilized ? <LoadingPopup /> : <></>}
            {isOpenLoginPopup ? <LoginPopup /> : <></>}
            {isOpenForgotPasswordPopup ? <ForgotPasswordPopup /> : <></>}
            {isOpenRegisterPopup ? <RegisterPopup /> : <></>}
        </>
    )
}
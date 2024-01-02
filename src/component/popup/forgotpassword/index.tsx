import { useState } from "react"
import "./style.scss"
import { useDispatch } from "react-redux"
import { setIsOpenForgotPasswordPopup, setIsOpenLoginPopup } from "../../../stores/popup"

export default function ForgotPasswordPopup() {
    const [email, setEmail] = useState<string>()
    const [code, setCode] = useState<string>()
    const dispatch = useDispatch()
    function login() {
        console.log('email', email);
        console.log('password', code);
    }
    return (
        <div className="popup">
            <div style={{ height: '100vh', display: "flex" }}>
                <div className="content">
                    <img className="close-button" src="/close.svg" alt="" onClick={() => dispatch(setIsOpenForgotPasswordPopup(false))} />
                    <div style={{ width: '50%', position: 'relative' }}>
                        <div className="form">
                            <div className="header">Forgot Password?</div>
                            <div className="sub-header">Please enter your email to recover your password</div>
                            <div className="field">
                                <div className="email">
                                    <input className="input" placeholder="Email@gmail.com" type="text" onChange={(event) => setEmail(event.target.value)} />
                                    <button className="action">Send Code?</button>
                                </div>
                                <div className="line" />
                            </div>
                            <div className="field">
                                <input className="input" placeholder="Code" type="password" onChange={(event) => setCode(event.target.value)} />
                                <div className="line" />
                            </div>
                            <button className="button" onClick={login}>Recover Password</button>
                            <button className="text" onClick={() => {
                                dispatch(setIsOpenForgotPasswordPopup(false))
                                dispatch(setIsOpenLoginPopup(true))
                            }}>Login</button>
                        </div>
                    </div>
                    <div className="logo">
                        <div className="name">Shop App</div>
                        <img className="icon" src="/bag-icon.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
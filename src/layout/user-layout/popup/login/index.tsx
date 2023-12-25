import { useState } from "react"
import "./style.scss"
import { useDispatch } from "react-redux"
import { setIsOpenForgotPasswordPopup, setIsOpenLoginPopup, setIsOpenRegisterPopup } from "../../../../stores/popup"
import { login } from "../../../../stores/authentication"

export default function LoginPopup() {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const dispatch = useDispatch()
    function signIn() {
        console.log('email', email);
        console.log('password', password);
        dispatch(login())
        dispatch(setIsOpenLoginPopup(false))
    }
    return (
        <div className="popup">
            <div style={{ height: '100vh', display: "flex" }}>
                <div className="content">
                    <img className="close-button" src="/close.svg" alt="" onClick={() => dispatch(setIsOpenLoginPopup(false))} />
                    <div style={{ width: '50%', position: 'relative' }}>
                        <div className="form">
                            <div className="header">Welcome to Shop App</div>
                            <div className="field">
                                <div className="email">
                                    <input className="input" placeholder="Email@gmail.com" type="text" onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="line" />
                            </div>
                            <div className="field">
                                <div className="password">
                                    <input className="input" placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
                                    <button className="action" onClick={() => {
                                        dispatch(setIsOpenLoginPopup(false))
                                        dispatch(setIsOpenForgotPasswordPopup(true))
                                    }}>Forgot?</button>
                                </div>
                                <div className="line" />
                            </div>
                            <button className="button" onClick={signIn}>Login</button>
                            <button className="text" onClick={() => {
                                dispatch(setIsOpenLoginPopup(false))
                                dispatch(setIsOpenRegisterPopup(true))
                            }}>Create An Account</button>
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
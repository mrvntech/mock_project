import { useState } from "react"
import './style.scss'
import { useDispatch } from "react-redux"
import { setIsOpenLoginPopup, setIsOpenRegisterPopup } from "../../../../stores/popup"
export default function RegisterPopup() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassowrd, setConfirmPassword] = useState('')
    const dispatch = useDispatch()

    function login() { }
    return (
        <div className="popup">
            <div style={{ height: '100vh', display: "flex" }}>
                <div className="content">
                    <img className="close-button" src="/close.svg" alt="" onClick={() => dispatch(setIsOpenRegisterPopup(false))} />
                    <div style={{ width: '50%', position: 'relative' }}>
                        <div className="form">
                            <div className="header">Welcome to Shop App</div>
                            <div className="field">
                                <div className="username">
                                    <input className="input" placeholder="User Name" type="text" onChange={(event) => setUserName(event.target.value)} />
                                </div>
                                <div className="line" />
                            </div>
                            <div className="field">
                                <div className="email">
                                    <input className="input" placeholder="Email@gmail.com" type="text" onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="line" />
                            </div>
                            <div className="field">
                                <div className="password">
                                    <input className="input" placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="line" />
                            </div>
                            <div className="field">
                                <div className="password">
                                    <input className="input" placeholder="Confirm Password" type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
                                </div>
                                <div className="line" />
                            </div>
                            <button className="button" onClick={login}>Register</button>
                            <button className="text" onClick={() => {
                                dispatch(setIsOpenRegisterPopup(false))
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
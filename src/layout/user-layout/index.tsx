import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import './style.scss'

export default function UserPageLayout() {
    return (
        <div className="page-layout">
            <Header />
            <Main>
                <Outlet />
            </Main>
        </div>
    )
}
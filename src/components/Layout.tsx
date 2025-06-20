import { Outlet } from "react-router";

export default function Layout() {
    return(
        <div>
            <div>
                Layout
            </div>
            <Outlet></Outlet>
        </div>
    )
}
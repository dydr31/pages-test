import { NavLink, Outlet } from "react-router-dom"

export const Header = () => {
    return (
        <>
        <header>
            <h1>This is the header</h1>
            <NavLink to='/'>Home</NavLink>
            <br/>
            <NavLink to='/projects'>Projects</NavLink>
        </header>
        <Outlet/>
        </>
    )
}
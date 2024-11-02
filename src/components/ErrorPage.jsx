import { NavLink } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <>
        <div> an error happened</div>
        <NavLink to='/'>Go back</NavLink>
        </>
    )
}
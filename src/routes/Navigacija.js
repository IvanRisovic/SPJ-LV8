import { Link, Outlet } from "react-router-dom"

const Navigacija = () => {
    return (
        <>
            <nav>
                <Link className="btn btn-primary" to="/">Početna</Link>
                <Link className="btn btn-success" to="/routes/Dodaj">Dodaj</Link>
            </nav>            
        </>
    )
}

export default Navigacija
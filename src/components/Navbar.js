import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (<header>
    <nav>
        <NavLink to="/">Domov</NavLink>
        <NavLink to="/news">Novinky</NavLink>
        <NavLink to="/halfmarathon">Hámornícky polmaratón</NavLink>
        <NavLink to="/members">Členovia klubu</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
    </nav>
    </header>
    )
}

export default Navbar
import { NavLink } from "react-router-dom";

function Header() {
    return (
            <header>
                <nav>
                    <NavLink to="/">Hem</NavLink>
                    <NavLink to="/products">Produkter</NavLink>
                </nav>
            </header>
        )
}

export default Header;
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <div class="right-text">
                    Welcome to katywelyczko.com
                </div>
            </ul>
        </nav>
    );
};

export { NavBar };
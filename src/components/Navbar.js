import {NavLink} from 'react-router-dom';

//Instead of Link if we use NavLink it will giev default active class
export const Navbar = () => {
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
        </nav>
    )
}



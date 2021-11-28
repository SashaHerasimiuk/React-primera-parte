import { NavLink } from 'react-router-dom'
import '../../Styles/Components/Layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink className={({isActive}) => (isActive ? "activo":"unactivo")} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? "activo":"unactivo")} to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? "activo":"unactivo")} to="/novedades">Novedades</NavLink></li>
                    <li><NavLink className={({isActive}) => (isActive ? "activo":"unactivo")} to="/contacto">contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
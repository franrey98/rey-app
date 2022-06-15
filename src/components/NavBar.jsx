import React from 'react'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='barra-footer'>
            <header>
                <Link to='/'>
                    <h1>Tienda de Deportes</h1>
                </Link>
                <ul className='estilos-nav'>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navbar-activo" : '')} to='/'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navbar-activo" : '')} to='/productos'>Productos</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? "navbar-activo" : '')} to='/categorias'>Categorias</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </header>
        </div>
    )
}

export default NavBar
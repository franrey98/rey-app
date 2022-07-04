import React from 'react'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className=' bg-slate-900 pt-4 pb-4'>
            <header className='text-xl font-semibold text-white mx-24 text-center md:grid grid-cols-3 items-center justify-center justify-items-center'>
                <Link to='/'>
                    <h1 className='text-2xl'>Tienda de Deportes</h1>
                </Link>
                <ul className='text-center mt-4 md:flex gap-4 md:m-0'>
                    <li className='my-1'>
                        <NavLink to='/'>Inicio</NavLink>
                    </li>
                    <li className='my-1'>
                        <NavLink className={({ isActive }) => (isActive ? "navbar-activo" : '')} to='/productos'>Productos</NavLink>
                    </li>
                    <li className='my-1'>
                        <NavLink className={({ isActive }) => (isActive ? "navbar-activo" : '')} to='/categorias'>Categorias</NavLink>
                    </li>
                </ul>
                <Link to='/cart' className='flex justify-center mt-4' >
                    <CartWidget />
                </Link>
            </header>
        </div>
    )
}

export default NavBar
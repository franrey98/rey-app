import React from 'react'
import CartWidget from './CartWidget'

const Header = () => {
    return (
        <div className='barra-footer'>
            <header>
                <h1>Tienda de Deportes</h1>
                <nav className='estilos-nav'>
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                </nav>
                <CartWidget />
            </header>
        </div>
    )
}

export default Header
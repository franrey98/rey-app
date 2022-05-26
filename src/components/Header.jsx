import React from 'react'

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
                <img src="./src\img\carrito.png" className='img-carrito' alt="carrito" />
            </header>
        </div>
    )
}

export default Header
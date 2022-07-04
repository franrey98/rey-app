import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"

const Checkout = () => {

    const { cart, cartTotal } = useContext(CartContext)

    console.log(cart)

    return (
        <div className="2xl:mx-40 pb-8">
            <h1 className="text-center my-6  font-bold text-3xl">CheckOut</h1>

            <div className="flex flex-col items-center m-2 ">
                <p className="text-base font-normal p-2 my-6 bg-slate-700 rounded-sm text-white">El valor final de tu compra es de: <span className="font-bold">${cartTotal()}</span></p>
            </div>


            <form className=" bg-slate-900/90 rounded-md p-2 mx-8 md:mx-56 lg:mx-96 py-4 pb-6">
                <p className="mb-12 font-medium text-xl mx-8 text-center text-white">Completa el siguiente formulario para finalizar tu pedido</p>
                <div className="flex flex-col text-center">
                    <label htmlFor="name" className="text-lg font-semibold text-white">Nombre y Apellido: </label>
                    <input
                        className=" font-medium text-center uppercase border-4 border-white p-1 text-white bg-slate-900/90 rounded-sm mt-2 mx-4"
                        type="text"
                        id="name"
                        name="nombre"
                        placeholder="Nombre y Apellido"
                    />
                </div>
                <div className="flex flex-col text-center mt-4">
                    <label htmlFor="email" className="text-lg text-white font-semibold">Email: </label>
                    <input
                        className=" font-medium text-center uppercase border-4 border-white p-1 text-white bg-slate-900/90 rounded-sm mt-2 mx-4"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col text-center mt-4">
                    <label htmlFor="tel" className="text-lg text-white font-semibold">Telefono: </label>
                    <input
                        className=" font-medium text-center uppercase border-4 border-white p-1 text-white bg-slate-900/90 rounded-sm mt-2 mx-4"
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="Telefono"
                    />
                </div>
                <div className=" mx-20">
                    <button className="w-full rounded-sm font-semibold text-lg flex justify-center mt-4 p-2 bg-green-800 hover:bg-green-900 transition-all text-white">Completar compra</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
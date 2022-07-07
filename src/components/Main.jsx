import { Link } from "react-router-dom"

const Main = () => {
    return (
        <div>
            <h1 className="text-center pt-8 font-bold text-3xl">Bienvenido al e-commerce deportivo</h1>
            <p className="text-center mt-4 text-lg font-medium">Navega por nuestras distintas categorias para ver nuestros productos</p>
            <div className=" w-full flex justify-center">
                <Link className="flex justify-center mt-8 w-64 bg-slate-900 text-white p-2 rounded-md" to='/categorias'>Ir a productos</Link>
            </div>
            <div className='img-gym'>
                <div className="text-center pt-28">
                    <h2 className="text-white font-bold text-4xl">30 AÑOS DE TRAYECTORIA ACOMPAÑANDO A NUESTROS CLIENTES</h2>
                    <p className="mt-8 font-medium text-2xl text-white">Nuestra tienda adecuada al Covid-19</p>
                    <p className="mt-8 font-normal text-xl text-white">Tu lugar seguro para comprar ¡Disfrute de nuestra tienda!</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:mx-20 gap-4 mx-2 mt-8 pb-16">
                <div className="mx-8 md:mx-32">
                    <h2 className="text-center text-2xl font-semibold ">Sobre Nosotros</h2>
                    <p className="mt-6 font-normal text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.</p>
                    <p className="mt-6 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.
                    </p>
                </div>
                <div className="mx-8 md:mx-32">
                    <h2 className="text-center text-2xl font-semibold">Nuestro Equipo</h2>
                    <p className="mt-6 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi excepturi ducimus non quasi, odio facilis amet voluptas ex a qui iste commodi dolor repudiandae debitis deserunt placeat repellat mollitia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.</p>
                    <p className="mt-6 text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum saepe doloribus, reiciendis natus a in impedit omnis fugit ipsum. Exercitationem necessitatibus fugiat porro et cupiditate, saepe voluptates omnis voluptatibus quod.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
import imgLinkedin from '../img/linkedin.png'

const Footer = () => {
    return (
        <div className='absolute bottom-0 w-full h-24 bg-stone-900 text-white'>
            <p className='text-center mt-1 font-semibold text-base'>Todos los derechos reservados</p>
            <p className='text-center font-semibold text-sm'>Desarrollado por Francisco Rey</p>
            <a href='https://www.linkedin.com/in/francisco-rey-71060419a/' className='w-full flex justify-center mt-2'>
                <img className='h-8 flex justify-center' src={imgLinkedin} alt='linkedin' />
            </a>
        </div>
    )
}

export default Footer
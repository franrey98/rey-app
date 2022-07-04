import React from 'react'

const Error = ({ children }) => {
    return (
        <div>
            <h1 className='text-center mb-2 p-2 bg-red-800 text-white font-semibold text-xl mx-96 rounded-sm'>{children}</h1>
        </div>
    )
}

export default Error
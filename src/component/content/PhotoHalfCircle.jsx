import React from 'react'

function PhotoHalfCircle({ photo, alt, className }) {
    return (

        <div className=' '>
            <div className='w-full h-full'>
                <img className={` bg-black w-full h-full ${className}`}
                    src={photo} alt={alt} />
            </div>

        </div>


    )
}

export default PhotoHalfCircle
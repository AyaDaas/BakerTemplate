import React from 'react'

function PhotoHalfCircle({ photo, alt, className }) {
    return (

        <div className='w-full h-full'>
            <img className={`  ${className}`}
                src={photo} alt={alt} />
        </div>



    )
}

export default PhotoHalfCircle
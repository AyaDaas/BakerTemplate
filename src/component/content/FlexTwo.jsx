import React from 'react'

function FlexTwo({ children }) {
    return (
        <div className='md:flex justify-between '>
            <div className='md:w-1/2'>{children[0]}</div>
            <div className='md:w-1/2'>{children[1]}</div>

        </div>
    )
}

export default FlexTwo
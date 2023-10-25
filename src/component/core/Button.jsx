import React from 'react'

function Button({ label }) {
    return (
        <div >
            <button className='btn btn-sm hover:text-white uppercase rounded-lg hover:bg-black tracking-widest	 text-black p-12  py-5 font-semibold bg-white outline outline-black'>{label}</button>
        </div>
    )
}

export default Button
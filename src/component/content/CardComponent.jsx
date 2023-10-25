import React from 'react'

function CardComponent({ photo, title, desc }) {

    return (
        <div className=' lg:h-[350px]   lg:m-0 m-5'>

            <div className="mx-2 min-h-full    ">
                <div className=' container mx-auto py-6 w-[60px] h-[80px]'>
                    <img className="rounded-lg w-full" src={photo} alt="" />
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-4 text-xl font-bold   text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-4 md:text-sm md:mx-0 mx-12 font-normal text-gray-700 dark:text-gray-400">{desc}</p>

                </div>
            </div>




        </div>
    )
}

export default CardComponent
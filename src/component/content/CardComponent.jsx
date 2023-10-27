import React from 'react';

function CardComponent({ photo, title, desc, classPhoto, children, condition }) {
    return (
        <div className={condition ? `bg-white mx-3 my-2 shadow-2xl   rounded-xl ` : ''}>
            <div className='lg:m-0  min-h-[330px]'>
                <div className="mx-2  ">
                    <div>{children}</div>
                    <div className='container mx-auto  '>
                        <img className={` my-3  inline-block   align-items-center   ${classPhoto}`} src={photo} alt="" />
                    </div>
                    <div className="p-2">
                        <a href="#">
                            <h5 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h5>
                        </a>
                        <p className=" md:text-sm md:mx-0 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CardComponent;

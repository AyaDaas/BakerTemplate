import React, { useEffect, useState } from 'react';
import Modal from 'react-responsive-modal';
import lightbox from 'lightbox2'
import 'lightbox2/dist/css/lightbox.min.css'; // Import the lightbox2 CSS

function Gallery({ images }) {
    useEffect(() => {
        lightbox.option({
            'resizeDuration': 0,
            'fadeDuration': 300,
            'positionFromTop': 0
        })
    }, []);

    return (
        <div className="flex flex-wrap ">
            {images.map((image, index) => (
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2" key={index}>
                    <a href={image} data-lightbox="image-gallery">
                        <img className=" w-full " src={image} alt={`Image ${index}`} />
                    </a>
                </div>
            ))}
        </div>


    );
}

export default Gallery;

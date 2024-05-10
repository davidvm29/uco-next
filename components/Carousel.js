import React, { useState, useEffect } from 'react';

function Carousel({ images }) {
    // Estado para almacenar el índice actual del carrusel
    const [activeIndex, setActiveIndex] = useState(0);

    // Temporizador para cambiar automáticamente el índice del carrusel
    useEffect(() => {
        if (images && images.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, 3000); // Cambiar la imagen cada 3 segundos

            return () => clearInterval(interval); // Limpiar el temporizador al desmontar el componente
        }
    }, [images]);

    // Función para cambiar el índice del carrusel cuando se hace clic en un indicador
    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            {/* Carrusel de imágenes */}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                {/* Indicadores */}
                <div className="carousel-indicators">
                    {images && images.map((_, index) => (
                        <li
                            key={index}
                            className={`circular-button ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                            aria-label={`Slide ${index + 1}`}
                            data-bs-target="#carouselExample"
                            data-bs-slide-to={index}
                        ></li>
                    ))}
                </div>
                {/* Imágenes */}
                <div className="carousel-inner">
                    {images && images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img src={`/carousel-images/${image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-3"></div>
            <div className="mt-3"></div>
        </div>
    );
}

export default Carousel;


import {useState, useEffect} from 'react'

import './imageGallery.css'

function ImageGallery({images, currentItem}) {
    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        setCurrentImg(0)
    }, [currentItem])

    return (
        <div className='gallery-container'>
            <div className='gallery-mainContainer'>
                <img 
                    className='gallery-mainImg' 
                    src={images[currentImg].src} 
                    alt={images[currentImg].alt}
                />
            </div>

            {images.map((img, index) => {
                return (
                    <button 
                        key={index} 
                        className='gallery-thumbContainer' 
                        onClick={() => setCurrentImg(index)}
                    >
                        <img className='gallery-thumbImg' src={img.src} alt={img.alt} />
                    </button>
                )
            })}
        </div>
    )
}

export default ImageGallery
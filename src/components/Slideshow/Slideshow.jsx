import React, {useState, useEffect} from 'react';

import img1 from '../../assets/images/Picture-1.jpg';
import img2 from '../../assets/images/Picture-2.jpg';
import img3 from '../../assets/images/Picture-3.jpg';

const images = [img1, img2, img3];
const delay = 8000;

export default function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length -1 ? 0: prevIndex + 1
                ),
                delay
        );
        return () => {};
    }, [index])

    return (
        <div className='slideshow'>
            <div 
                className='slideshowSlider'
                style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {images.map((image, idx) => (
                    <img className='slide' key={idx} src={image} />
                ))}
            </div>
        </div>
    )
}
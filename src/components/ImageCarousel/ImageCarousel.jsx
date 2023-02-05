import React from 'react';
import {Image} from 'semantic-ui-react';

export default function ImageCarousel() {
    return (
        <div className='slideshow-container'>
            <div className='mySlides fade'>
                <Image src='http://imgur.com/a/FXXvise.png' />
                <Image src='http://imgur.com/a/5xYH6wP.png' />
                <Image src='http://imgur.com/a/90SRzay.png' />
            </div>
        </div>
    )
}
import React from 'react';
import {CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import {Image} from 'semantic-ui-react'

export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                isPlaying
                interval={5000}
                infinite
                hasMasterSpinner
            >
                    <Slide index={0}>
                        <Image src='src/assets/images/Picture-1.jpg' size='small' />
                    </Slide>
                    <Slide index={1}>
                        <Image src='src/assets/images/Picture-2.jpg' size='small' />
                    </Slide>
                    <Slide index={2}>
                        <Image src='src/assets/images/Picture-3.jpg' size='small' />
                    </Slide>
            </CarouselProvider>
        );
    }
}
import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 6000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div
                    className='testimonials'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='testimonials--header'> <br/>
                        <h1 style={{ color: theme.secondary }}> Our Primary Investing Focus</h1>
                    </div>
                    <div className='testimonials--body'>
                        <div
                            className='testimonials--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div
                                        className='single--testimony'
                                        key={test.id}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--img'
                                                style={{backgroundColor:theme.secondary,}}
                                            >
                                                <img className='img'
                                                    src={test.image}
                                                    alt={test.name}
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <h1>{test.name}</h1>
                                                <h4>{test.title}</h4>
                                                <img className='img2'
                                                    src={test.image2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                        <div className='yt-vid'>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;

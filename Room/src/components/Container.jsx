/* eslint-disable no-unused-vars */
import hero1 from './assets/desktop-image-hero-1.jpg'
import hero2 from './assets/desktop-image-hero-2.jpg'
import hero3 from './assets/desktop-image-hero-3.jpg'
import mobilehero1 from './assets/mobile-image-hero-1.jpg'
import mobilehero2 from './assets/mobile-image-hero-2.jpg'
import mobilehero3 from './assets/mobile-image-hero-3.jpg'
import arrow from './assets/icon-arrow.svg'
import left from './assets/icon-angle-left.svg'
import right from './assets/icon-angle-right.svg'
import dark from './assets/image-about-dark.jpg'
import light from './assets/image-about-light.jpg'
import Navigations from "./Navigations";
import { useState } from 'react';
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

const Container = () => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () =>{
        setSlide(slide + 1);
    }

    const prevSlide = () =>{
        setSlide (slide - 1);
    }

    const heading = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
    const images =[{src: hero1}, {src: hero2}, {src: hero3}]

    const pageDisplay = () =>{
        if (slide === 0){
            return <Slide1/>;
        }
        else if (slide === 1){
            return <Slide2/>;
        }
        else{
            return <Slide3/>;
        }
    }

    return ( 
        <div className="font-Primary h-screen lg:overflow-y-hidden overflow-y-auto">
            <div className="lg:flex">
                <div className="relative lg:flex-shrink-0 lg:flex-nowrap">
                    <Navigations/>

                    <img className="hidden lg:block w-full h-[70vh]" src={hero1}/>
                    
                    {/* mobile */}
                    <div className="relative lg:hidden block">
                        <Navigations/>
                        <img className="w-full" src={mobilehero1}/>

                        <div className="absolute bottom-0 right-0 bg-black flex justify-between w-3/12">
                            <button className="active:bg-VeryDarkGray py-5 px-6" onClick={prevSlide} disabled={slide == 0}>
                               <img  src={left}/>
                            </button>

                            <button className="active:bg-VeryDarkGray py-5 px-6" onClick={nextSlide} disabled={slide == 2}>
                                <img src={right}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative lg:mt-24 lg:px-20 px-10 mt-10">
                    <h1 className="font-bold text-[40px] leading-none lg:mb-6 mb-5">{heading[slide]}</h1>
                    <p className="text-DarkGray">{pageDisplay()}</p>

                    <a className="flex items-center gap-3 lg:mt-3 my-6 cursor-pointer hover:text-VeryDarkGray">
                        <p className="uppercase tracking-[10px] font-semibold text-sm">Shop now</p>
                        <img className="h-fit" src={arrow}/>
                    </a>

                    <div className="hidden absolute bottom-0 left-0 bg-black lg:flex justify-between w-3/12">
                        <button className="active:bg-VeryDarkGray py-5 px-6" onClick={prevSlide} disabled={slide == 0 }>
                           <img  src={left}/>
                        </button>

                        <button className="active:bg-VeryDarkGray py-5 px-6" onClick={nextSlide} disabled={slide == 2}>
                           <img src={right}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="lg:flex lg:justify-between">
                <div className="lg:flex-nowrap lg:flex-shrink-0">
                    <img className="w-full " src={dark}/>
                </div>

                <div className="px-10 pt-10">
                    <h1 className="font-semibold uppercase tracking-[7px] text-sm mb-4">About our furniture</h1>
                    <p className="text-DarkGray text-sm mb-10 lg:mb-0">Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>

                </div>

                <div className="flex-nowrap flex-shrink-0">
                    <img className="w-full" src={light}/>
                </div>
            </div>

        </div>
     );
}
 
export default Container;
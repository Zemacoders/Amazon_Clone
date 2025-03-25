import { useState } from "react";
import {slider} from "../assets/heroSlideData";
import { Link } from "react-router-dom";
const HeroSlider = () => {
    const [current, setCurrent] = useState(0);


    return (
        <div className="overflow-hidden relative h-[85vh] ">
            <div className="flex transition duration-500 ease-out transform h-full"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {slider.map((slide, index) => (
                    <div
                        key={index}
                        className="relative  w-full flex-shrink-0 bg-center bg-cover rounded-lg"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-gray-400/30"></div>

                        <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24 text-white">
                            <p className="text-md sm:text-lg mb-2">{slide.category}</p>
                            <h1 className="text-2xl sm:text-4xl font-semibold leading-snug mb-16">
                                {slide.mainHeading}
                            </h1>
                            <button className="bg-primary hover:scale-110 text-white font-medium px-6 py-3 w-fit transition">
                               <Link to='products'> {slide.button}</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute w-full bottom-0 flex justify-center gap-2 py-4 z-20">
                {slider.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-1.5 h-1.5 rounded-full bg-primary cursor-pointer transition-all ${current === i ? 'w-6 ' : ''
                            }`}
                    ></div>
                ))}
            </div>

        </div>
    );
};

export default HeroSlider;

"use client";
import Image from "next/image";
import imag1 from "../assets/01.png";
import imag2 from "../assets/02.png";
import imag3 from "../assets/03.png";
import imag4 from "../assets/04.png";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    { id: 1, src: imag1, alt: "Waffle with berries", bgColor: "#880808" },
    { id: 2, src: imag2, alt: "Pancakes with syrup", bgColor: "#0A4669" },
    { id: 3, src: imag3, alt: "French toast", bgColor: "#953553" },
    { id: 4, src: imag4, alt: "Omelette with herbs", bgColor: "#006666" },
];

const Banner = () => {
    const [selectedImage, setSelectedImage] = useState(1);

    const handleNext = () => {
        setSelectedImage((prev) => (prev === images.length ? 1 : prev + 1));
    };

    const handlePrev = () => {
        setSelectedImage((prev) => (prev === 1 ? images.length : prev - 1));
    };

    const currentImage = images.find((image) => image.id === selectedImage);

    return (
        <div
            className={`rounded-b-33xl relative max-w-7xl mx-auto text-white p-4 md:p-8 overflow-hidden transition-colors duration-500 h-[600px] md:h-[700px]`}
            style={{ backgroundColor: currentImage.bgColor }}
        >
            {/* top left circle  */}
            <div
                className={`absolute -top-[150px] -left-[200px] w-[400px] h-[400px] rounded-full opacity-30 transition-all duration-700 ${selectedImage === 1
                    ? "bg-[#A52A2A]"
                    : selectedImage === 2
                        ? "bg-[#0A3659]"
                        : selectedImage === 3
                            ? "bg-[#A95C68]"
                            : "bg-[#003333]"}`}

            ></div>

            {/* bottom right cicle  */}
            <div
                className={`absolute -bottom-[150px] -right-[200px] w-[400px] h-[400px] rounded-full opacity-30 transition-all duration-700 ${selectedImage === 1
                    ? "bg-[#A52A2A]"
                    : selectedImage === 2
                        ? "bg-[#0A3659]"
                        : selectedImage === 3
                            ? "bg-[#A95C68]"
                            : "bg-[#003333]"}`}

            ></div>

            {/* Main Section */}
            <div className="relative z-10 flex flex-col items-center justify-left h-full">
                <div className='w-[280px] mx-auto'>
                <h1 className="text-[45px]  font-bold uppercase ">
                    Breakfast
                </h1>
                <p className="  text-left text-[14px] md:text-[16px] max-w-[400px] mx-auto mt-2">
                    Breakfast, often referred to as the &apos;most important meal of the day&apos;,
                    provides essential nutrients to kick start our day.
                </p> 
                </div>

                {/* Image Carousel */}
                <div className="relative w-full max-w-[300px] md:max-w-[400px] my-6">
                    <div className="flex justify-center">
                        <button
                            className="absolute 320px:-left-4 375px:-left-6 500px:-left-14 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                            onClick={handlePrev}
                        >
                            <FaChevronLeft />
                        </button>

                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            className="w-[300px] md:w-[400px] h-[250px] md:h-[320px] object-cover transition-opacity duration-500"
                            width={384}
                            height={384}
                        />

                        <button
                            className="absolute 320px:-right-4 375px:-right-6 500px:-right-14 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                            onClick={handleNext}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>


                {/* main image  */}
                <div className="flex space-x-2 mt-4">
                    {images.map((image) => (
                        <button
                            key={image.id}
                            onClick={() => setSelectedImage(image.id)}
                            className={`${selectedImage === image.id ? "border-b-2 pb-3  border-white" : "pb-3"
                                } transition-opacity duration-300`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full"
                                width={64}
                                height={64}
                            />
                        </button>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Banner;

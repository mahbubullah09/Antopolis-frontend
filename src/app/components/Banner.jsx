"use client";
import Image from 'next/image';
import imag1 from '../assets/01.png';
import imag2 from '../assets/02.png';
import imag3 from '../assets/03.png';
import imag4 from '../assets/04.png';
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const images = [
    { id: 1, src: imag1, alt: "Waffle with berries" },
    { id: 2, src: imag2, alt: "Pancakes with syrup" },
    { id: 3, src: imag3, alt: "French toast" },
    { id: 4, src: imag4, alt: "Omelette with herbs" },
];

const Banner = () => {
    const [selectedImage, setSelectedImage] = useState(1);
    const [prevImage, setPrevImage] = useState(1);

    const handleImageChange = (imageId) => {
        setPrevImage(selectedImage);
        setSelectedImage(imageId);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => setPrevImage(selectedImage), 500); // Smooth transition delay
        return () => clearTimeout(timeoutId);
    }, [selectedImage]);

    return (
        <div
            className={`relative rounded-b-3xl ${selectedImage === 1
                ? "bg-[#880808]"
                : selectedImage === 2
                    ? "bg-[#0A4669]"
                    : selectedImage === 3
                        ? "bg-[#953553]"
                        : "bg-[#006666]"} max-w-7xl h-[700px] mx-auto text-white p-8 overflow-hidden transition-colors duration-500`}
        >
            {/* Top Left Circle */}
            <div
                className={`absolute -top-[250px] -left-[300px] w-[800px] h-[800px] rounded-full opacity-50 transition-all duration-700 ${selectedImage === 1
                    ? "bg-[#A52A2A]"
                    : selectedImage === 2
                        ? "bg-[#0A3659]"
                        : selectedImage === 3
                            ? "bg-[#A95C68]"
                            : "bg-[#003333]"}`}
            ></div>

            {/* Bottom Right Circle */}
            <div
                className={`absolute -bottom-[450px] -right-[500px] w-[900px] h-[900px] rounded-full opacity-50 transition-all duration-700 ${selectedImage === 1
                    ? "bg-[#A52A2A]"
                    : selectedImage === 2
                        ? "bg-[#0A3659]"
                        : selectedImage === 3
                            ? "bg-[#A95C68]"
                            : "bg-[#003333]"}`}
            ></div>

            {/* Right Side - Main Image */}
            <div
                className={`absolute right-20 bottom-20 flex justify-end items-end transition-all duration-700 ease-in-out transform ${prevImage !== selectedImage ? "translate-x-[100%]" : "translate-x-0"}`}
                style={{
                    opacity: prevImage !== selectedImage ? 0 : 1,
                }}
            >
                <div className="w-[400px] h-[320px] relative">
                    <Image
                        src={images.find((image) => image.id === selectedImage)?.src || imag1}
                        alt="Breakfast Image"
                        className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
                        layout="fill"
                    />
                </div>
            </div>

            {/* Header */}
            <header className="mb-4 relative z-10">
                <h1 className="text-[32px] font-bold uppercase">Restaurant</h1>
            </header>

            {/* Main Section */}
            <div className="ml-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side - Text and Thumbnails */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-[96px] font-medium uppercase">Breakfast</h2>
                    <p className="text-[16px]">
                        Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet. Eating a healthy breakfast can improve concentration and performance, boost physical endurance, and lower cholesterol levels.
                    </p>

                    <div className="flex space-x-4 my-2">
                        {images.map((image) => (
                            <button
                                key={image.id}
                                onClick={() => handleImageChange(image.id)}
                                className={`${selectedImage === image.id ? "border-b-4 pb-3  border-white" : "pb-3"
                                    } overflow-hidden transition-all duration-500 w-[150px] h-[130px]`}
                            >
                                <Image
                                    className="w-full h-full"
                                    src={image.src}
                                    alt={image.alt}
                                    width={100}
                                    height={100}
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="relative w-full my-4">
                            <input
                                type="text"
                                className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 text-black"
                                placeholder="Search..."
                            />
                            <button className="absolute left-1 top-2 text-black bottom-2 font-bold py-2 px-4 rounded">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

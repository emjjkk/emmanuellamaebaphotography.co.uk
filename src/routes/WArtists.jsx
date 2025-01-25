import React, { useState } from 'react';

export default function WArtists() {

    const images = import.meta.glob('/i/artists/*');
    const imagePaths = Object.keys(images);
    

    return (
        <>
            <section className="w-full h-[20vh] md:h-[40vh] bg-cover bg-top bg-[url('/artists.jpg')]">
                <div className="w-full h-full p-4 md:px-24 md:py-16 flex flex-col justify-end bg-[rgba(0,0,0,0.7)]">
                    <h1 className="text-2xl md:text-5xl font-regular text-white">Portfolio | Artists</h1>
                </div>
            </section>
            <section className="w-full p-4 md:px-24 md:py-12 min-h-screen">
                <div className="artists-gallery cc-3">
                    {imagePaths.map((path, index) => (
                        <img key={index} src={path} alt={`Artist ${index + 1}`} className="w-full mb-5"/>
                    ))}
                </div>
            </section>
        </>
    )
}
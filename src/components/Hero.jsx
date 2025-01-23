import { useState } from 'react'

export default function Hero() {
    return (
        <>
            <section className="">
                <section className="w-full h-[100vh] flex flex-row justify-between">
                    <div className="w-[60%] bg-center bg-cover bg-[url('/banner-bg.jpg')] flex flex-row justify-end">
                        <img src="/back2.png" className='h-full' alt="" />
                    </div>
                    <div className="w-[60%] flex flex-col items-end justify-center -pl-[20px] pr-24">
                        <h2 className="text-lg text-purple-800 uppercase mb-5 mt-10">Emmanuella Maeba</h2>
                        <h1 className="text-6xl text-right leading-[2.05ch] text-slate-800 font-light mb-5"><span className="font-bold">Photographer</span><br/>& Content Creator</h1>
                        <p className="text-md text-right w-1/2 mb-10">Based in Medway, Kent, I specialize in various kinds of photography</p>
                    <button className="px-4 py-2 bg-purple-700 rounded-sm text-white text-sm">See Portfolio</button>
                    </div>
                </section>
            </section>
        </>
    )
}
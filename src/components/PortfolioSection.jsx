import { useState } from 'react'

export default function PortfolioSection() {
    return (
        <>
            <section className="px-4 py-12 md:p-24">
                <h2 className="text-2xl md:text-4xl text-slate-800 font-semibold text-center mb-10">Portfolio</h2>
                <div className='cc-3'>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/artists.jpg" alt="artists" />
                        <a href="/work/artists">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Artists <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/dance.jpg" alt="artists" />
                        <a href="/work/dance">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Dance <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/portraits.jpg" alt="artists" />
                        <a href="/work/portraits">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Portraits <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/bts.jpg" alt="bts" />
                        <a href="/work/bts">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Behind the Scenes <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/productionstills.jpg" alt="bts" />
                        <a href="/work/ps">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Production Stills <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                    <div className="w-fit h-fit mb-5 relative group">
                        <img src="/stilllife.jpg" alt="bts" />
                        <a href="/work/stilllife">
                            <div className="md:hidden group-hover:flex absolute w-full h-full bg-[rgba(0,0,0,0.8)] top-0 left-0 p-4 items-center justify-center">
                                <p className="text-white text-lg">Still Life <i className="fa-solid fa-angle-right"></i></p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
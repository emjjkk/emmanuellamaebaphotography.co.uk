import { useState } from 'react'

export default function Footer(){
    return(
       <>
        <footer className="px-24 py-8 bg-slate-900 text-white">
            <div className="flex justify-between">
                <div className="w-1/3">
                    <h1 className="text-white text-lg mb-2">About Me</h1>
                    <p className='text-sm text-purple-500'>My name is Emmanuella Maeba and I’m a professional photographer and content creator. I’m offering my services to individual and corporate clients throughout the UK. Make your favorite life moment or event last and remain in your memory!</p>
                </div>
                <div className="w-1/3 text-right">
                    <h1 className="text-white text-lg mb-2">Contact details</h1>
                    <p className="text-sm"><i className="fa-solid fa-location mr-2"></i>Kent, United Kingdom</p>
                    <p className="text-sm"><i className="fa-solid fa-phone mr-2"></i>+44 749 666 6840</p>
                    <p className="text-sm"><i className="fa-solid fa-at mr-2 mb-5"></i>emmanuella.maeba@gmail.com</p>
                    <p><i className="fa-brands fa-instagram ml-2"></i> <i className="fa-brands fa-facebook ml-2"></i> <i className="fa-brands fa-tiktok ml-2"></i> <i className="fa-brands fa-youtube ml-2"></i></p>
                </div>
            </div>
        </footer>
        <div className="w-full px-24 py-2 bg-black text-white flex justify-between">
            <p className="text-[11px] text-light">&copy;2025 Emmanuella Maeba. All rights reserved</p>
            <p className="text-slate-500 text-[11px] text-light">Web development by @emjjkk <i className="fa-brands fa-bluesky ml-1 text-[11px]"></i> <i className="fa-brands fa-discord text-[11px]"></i> <i className="fa-brands fa-github text-[11px]"></i></p>
        </div>
       </> 
    )
}
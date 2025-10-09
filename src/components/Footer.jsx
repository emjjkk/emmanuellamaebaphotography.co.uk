import { useState } from 'react'

export default function Footer() {
    return (
        <>
            <footer className="px-4 md:px-24 py-8 bg-slate-900 text-white">
                <div className="md:flex justify-between">
                    <div className="md:w-1/3">
                        <h1 className="text-white text-lg mb-2">About Me</h1>
                        <p className='text-sm text-slate-200'>My name is Emmanuella Maeba and I’m a professional photographer and content creator. I’m offering my services to individual and corporate clients throughout the UK. Make your favorite life moment or event last and remain in your memory!</p>
                    </div>
                    <div className="md:w-1/3 text-right mt-5 md:mt-0">
                        <h1 className="text-white text-lg mb-2">Contact details</h1>
                        <p className="text-sm"><i className="fa-solid fa-location mr-2"></i>Kent, United Kingdom</p>
                        <p className="text-sm"><i className="fa-solid fa-phone mr-2"></i>+44 749 666 6840</p>
                        <p className="text-sm"><i className="fa-solid fa-at mr-2 mb-5"></i>emmanuellamaebaphoto@gmail.com</p>
                        <p>
                            <a href="https://instagram.com/emmanuellamaebaphotography"><i className="fa-brands fa-instagram ml-2 hover:text-purple-700"></i> </a>
                            <a href="https://www.linkedin.com/in/emmanuella-maeba-140501209/?originalSubdomain=uk"><i className="fa-brands fa-linkedin ml-2 hover:text-purple-700"></i> </a>
                            <a href="https://twitter.com/EmmanuellaMaeba"><i className="fa-brands fa-x-twitter ml-2 hover:text-purple-700"></i> </a>
                            <a href="https://www.facebook.com/emmamaebaphotography/"><i className="fa-brands fa-facebook ml-2 hover:text-purple-700"></i> </a>
                        </p>
                    </div>
                </div>
            </footer>
            <div className="w-full px-4 md:px-24 py-2 bg-black text-white md:flex justify-between">
                <p className="text-[11px] text-light">&copy;2025 Emmanuella Maeba. All rights reserved</p>
                <p className="text-slate-500 text-[11px] text-light flex items-center gap-1">Website built with by @emjjkk 
                    <a href="https://emjjkk.vercel.app"><i className="fa-solid fa-globe ml-1 text-[11px] hover:text-white"></i> </a>
                    <a href="https://discord.com/users/1100072616317952040"><i className="fa-brands fa-discord ml-1 text-[11px] hover:text-white"></i> </a>
                    <a href="https://github.com/emjjkk"><i className="fa-brands fa-github ml-1 text-[11px] hover:text-white"></i> </a>
                </p>
            </div>
        </>
    )
}

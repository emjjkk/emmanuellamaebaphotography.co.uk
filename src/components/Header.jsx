import { useState } from 'react'

export default function Header(){
    return(
       <>
        <header className="w-full px-24 py-2 flex justify-between items-center fixed bg-white z-[999]">
            <div className="items-center w-[100px]">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="items-center">
                <img src="/logo-default-176x28.png" className='w-[200px] h-auto' alt="emmanuellamaebaphoto"/>
            </div>
            <div className="items-center w-[100px]">
                <button className="px-2 py-1 bg-purple-700 rounded-sm text-white text-sm">Contact Me</button>
            </div>
        </header>
       </> 
    )
}
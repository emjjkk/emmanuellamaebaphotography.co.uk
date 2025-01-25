export default function About() {
    return (
        <>
            <section className="w-full h-[40vh] bg-cover bg-top bg-[url('/artists.jpg')]">
                <div className="w-full h-full px-4 md:px-24 py-12 md:py-16 flex flex-col justify-end bg-[rgba(0,0,0,0.7)]">
                    <h1 className="text-3xl md:text-5xl font-regular text-white">About Me</h1>
                </div>
            </section>
            <div className="w-full min-h-screen px-4 py-12 md:p-24 md:flex">
                <div className="md:w-1/3">
                    <img src="/banner-bg.jpg" className="md:h-[600px] w-full md:w-auto rounded-lg mb-10 pr-10" alt="" />
                </div>
                <div className="md:w-1/3 mb-5">
                    <h1 className="text-4xl font-semibold mb-3">Emmanuella Maeba</h1>
                    <p className="font-light text-xl mb-5 md:mb-10">Photographer</p>
                    <p className="text-md font-light">Emmanuella Maeba is a portrait, stills photographer, and content creator. Her love for film and music inspires her to find other creatives she can work with. She likes to work in a creative, visually pleasing way to see a photograph in a different perspective. It's important to work in an effective manner because having a similar way like everybody else, will not show the diversity in the different selection of work.</p>
                </div>
                <div className="md:w-1/3">
                    <div className="w-full flex flex-col items-end mb-5 md:mt-26">
                        <h2 className="text-lg text-right mb-2">Photography <span className="font-light ml-5">100%</span></h2>
                        <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                            <div className="w-[100%] h-full bg-red-500"></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end mb-5">
                        <h2 className="text-lg text-right mb-2">Creativity <span className="font-light ml-5">85%</span></h2>
                        <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                            <div className="w-[85%] h-full bg-purple-500"></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end mb-5">
                        <h2 className="text-lg text-right mb-2">Retouching <span className="font-light ml-5">95%</span></h2>
                        <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                            <div className="w-[95%] h-full bg-blue-500"></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end mb-5">
                        <h2 className="text-lg text-right mb-2">Communication <span className="font-light ml-5">99%</span></h2>
                        <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                            <div className="w-[99%] h-full bg-green-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
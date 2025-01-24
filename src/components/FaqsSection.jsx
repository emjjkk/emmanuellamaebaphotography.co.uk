export default function () {
    return (
        <>
            <section className="px-4 my-12 md:p-24">
                <h2 className="text-2xl md:text-4xl text-slate-800 font-semibold text-center mb-12">Frequently Asked Questions</h2>
                <div className="md:flex">
                    <div className="md:w-2/4 text-slate-800 border-slate-500">
                        <div className="flex flex-col divide-y">
                            <details open="true">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">How do I book a photo session with you?</summary>
                                <div className="px-4 pb-4 font-light">
                                    <p>Thank you for your interest in booking a photo session with me! I'd be delighted to help capture some beautiful moments for you. The first step is to reach out to me via email or phone, whichever is more convenient for you. You can find my contact information on my website or social media profiles. From there, I'll guide you through the rest of the proccess</p>
                                </div>
                            </details>
                            <details open="">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">What is your photography style or specialty?</summary>
                                <div className="px-4 pb-4 font-light">
                                    <p>My photography style and specialty primarily revolve around stills, musicals, and portraits. My style is characterized by a blend of creativity, attention to detail, and a desire to tell stories through my images. I adapt to each subject and setting, using a combination of natural light, composition, and post-processing techniques to achieve the desired aesthetic.</p>
                                </div>
                            </details>
                            <details open="">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Can I see more of your work and reviews?</summary>
                                <div className="px-4 pb-4 space-y-2 font-light">
                                    <p>Certainly! I'd be happy to share more of my work and client reviews with you. You can view a selection of my photography work on my website or social media profiles. I regularly update my portfolio with some of my favorite shots from various projects, so you can get a better sense of my style and the type of photography I specialize in.</p>
                                </div>
                            </details>
                            <details open="">
                                <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer photo editing or retouching services?</summary>
                                <div className="px-4 pb-4 space-y-2 font-light">
                                    <p>Yes, I do offer photo editing and retouching services. I understand that post-processing is an essential part of achieving the desired look and quality in photography. Whether you need basic color correction, exposure adjustments, or more extensive retouching to enhance the overall appeal of your images, I can provide these services to meet your specific requirements.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="md:w-2/4 flex flex-col items-end mt-10 md:mt-0">
                        <div className="w-full flex flex-col items-end mb-10">
                            <h2 className="text-lg text-right mb-2">Photography <span className="font-light ml-5">100%</span></h2>
                            <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                                <div className="w-[100%] h-full bg-red-500"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-end mb-10">
                            <h2 className="text-lg text-right mb-2">Creativity <span className="font-light ml-5">85%</span></h2>
                            <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                                <div className="w-[85%] h-full bg-purple-500"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-end mb-10">
                            <h2 className="text-lg text-right mb-2">Retouching <span className="font-light ml-5">95%</span></h2>
                            <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                                <div className="w-[95%] h-full bg-blue-500"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-end mb-10">
                            <h2 className="text-lg text-right mb-2">Communication <span className="font-light ml-5">99%</span></h2>
                            <div className="w-full md:w-[80%] h-[3px] bg-slate-300">
                                <div className="w-[99%] h-full bg-green-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
import ContactForm from '../components/ContactForm'
export default function Contact() {
    return (
        <>
            <section className="w-full h-[40vh] bg-cover bg-top bg-[url('/bts.jpg')]">
                <div className="w-full h-full px-4 md:px-24 py-12 md:py-16 flex flex-col justify-end bg-[rgba(0,0,0,0.7)]">
                    <h1 className="text-3xl md:text-5xl font-regular text-white">Contact Me</h1>
                </div>
            </section>
            <section className="w-full min-h-screen">
                <div className="px-4 md:px-24 py-12 md:flex justify-between">
                    <div className="flex flex-col items-center justify-center md:w-1/3 md:border-l mb-5 md:mb-0">
                        <i className="fa-solid fa-phone text-purple-500 text-lg mb-2"></i>
                        <p className="text-md font-light">+44 749 666 6840</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/3 md:border-x mb-5 md:mb-0">
                        <i className="fa-solid fa-envelope text-purple-500 text-lg mb-2"></i>
                        <p className="text-md font-light">emmanuellamaebaphoto@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center justify-center md:w-1/3 md:border-r">
                        <i className="fa-solid fa-map-marker text-purple-500 text-lg mb-2"></i>
                        <p className="text-md font-light">Kent, United Kingdom</p>
                    </div>
                </div>
                <div className="px-4 md:px-24 bg-slate-200 py-12 md:flex">
                    <div className="md:w-1/2 md:pr-8 mb-5 md:mb-0">
                        <ContactForm />
                    </div>
                    <div className="md:w-2/4 md:pl-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79632.4916021419!2d0.3605286438911963!3d51.411959011566935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d2091ae0f653%3A0x30eae2da2ed9f40!2sMedway%2C%20UK!5e0!3m2!1sen!2srw!4v1737714448999!5m2!1sen!2srw"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

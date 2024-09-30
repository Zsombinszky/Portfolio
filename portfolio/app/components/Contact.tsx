import React from 'react';
import {CONTACT_MESSAGE} from '@/constants';
import ContactForm from "@/app/components/ContactForm";
import {FindMe} from "@/app/components/FindMe";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="relative h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(/backgrounds/contactbg.jpeg)'}}
        >
            <div className="max-w-7xl ~mt-8/24 mx-auto">
                <h2 className="text-4xl md:text-6xl text-center md:text-start lg:text-8xl glow-text font-bold text-color-5 ~mb-8/12">
                    Let&apos;s Connect
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <p className="~text-xl/2xl px-6 mb-2 glow-text font-semibold text-lightGray text-center">
                            {CONTACT_MESSAGE}
                        </p>
                        <a
                            href="mailto:pzsombor.dev@gmail.com"
                            className="~text-medium/lg glow-text font-medium text-color-4 hover:text-lightOrange transition-colors duration-200"
                        >
                            pzsombor.dev@gmail.com
                        </a>
                        <FindMe/>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
}

export default Contact;

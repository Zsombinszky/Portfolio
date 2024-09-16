import React from 'react';
import {LuSeparatorHorizontal} from "react-icons/lu";
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
            <div className="max-w-7xl mt-24 mx-auto">
                <h2 className="text-5xl md:text-8xl glow-text font-bold text-color-5 dark:text-lightGray mb-12">
                    Let&apos;s Connect
                </h2>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
                        <p className="text-2xl mb-2 glow-text font-semibold text-lightGray text-center">
                            {CONTACT_MESSAGE}
                        </p>
                        <a
                            href="mailto:pzsombor.dev@gmail.com"
                            className="text-lg glow-text font-medium text-color-4 hover:text-lightOrange transition-colors duration-200"
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

import React, {useEffect, useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Button from "@/app/components/Button";
import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from './CustomInput';
import MessageInput from "@/app/components/MessageInput";

// Zod schema for form validation
const ContactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
});

// TypeScript type from Zod schema
export type FormData = z.infer<typeof ContactSchema>;

const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const successSound = useRef<HTMLAudioElement | null>(null);
    const errorSound = useRef<HTMLAudioElement | null>(null);

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        resolver: zodResolver(ContactSchema),
    });

    useEffect(() => {
        successSound.current = new Audio('/sounds/success.mp3');
        errorSound.current = new Audio('/sounds/error.mp3');
    }, []);

    const onSubmit = (data: FormData) => {
        setIsLoading(true);
        emailjs.send('service_7m1y1uj', 'template_6577s82', data, 'aVgBgMNaEisEecBY5')
            .then(() => {
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                successSound.current?.play();
                reset();
            }, () => {
                toast.error('Failed to send message!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                errorSound.current?.play();
            }).finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <div className="w-[80%] md:w-[45%] max-h-[520px] rounded-3xl"
             style={{
                 background: 'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1))',
                 backdropFilter: 'blur(10px)',
                 boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                 border: '1px solid rgba(255,255,255,0.18)',
                 fontFamily: 'var(--font-code)',
             }}>
            <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-2 rounded-lg shadow-lg">
                <h3 className="~text-xl/3xl glow-text text-center md:text-start font-bold text-color-1 ~mb-2/4">
                    Contact Form
                </h3>
                <div className="flex md:flex-col">
                    <CustomInput
                        label="Name"
                        id="name"
                        type="text"
                        register={register}
                        error={errors.name?.message}
                    />
                    <CustomInput
                        label="Email"
                        id="email"
                        type="email"
                        register={register}
                        error={errors.email?.message}
                    />
                </div>
                <MessageInput register={register} errors={errors}/>
                <div className="flex justify-center ~mt-2/6">
                    <Button type="submit">
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ContactForm;

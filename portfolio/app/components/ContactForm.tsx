import React, {useEffect, useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Button from "@/app/components/Button";
import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from './CustomInput'; // Import CustomInput component

// Zod schema for form validation
const ContactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
});

// TypeScript type from Zod schema
type FormValues = z.infer<typeof ContactSchema>;

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    // Initialize refs with null
    const successSound = useRef<HTMLAudioElement | null>(null);
    const errorSound = useRef<HTMLAudioElement | null>(null);

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValues>({
        resolver: zodResolver(ContactSchema),
    });

    // Preload audio files using useEffect
    useEffect(() => {
        successSound.current = new Audio('/sounds/success.mp3');
        errorSound.current = new Audio('/sounds/error.mp3');
    }, []);

    const onSubmit = (data: FormValues) => {
        setIsLoading(true);
        emailjs.send('service_7m1y1uj', 'template_6577s82', data, 'aVgBgMNaEisEecBY5')
            .then((result) => {
                console.log(result.text);
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
                if (successSound.current) successSound.current.play();
                reset();
            }, (error) => {
                console.log(error.text);
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
                if (errorSound.current) errorSound.current.play();
            }).finally(() => {
            // Set loading state back to false
            setIsLoading(false);
        });
    };

    return (
        <div className="md:w-[45%] max-h-[520px] rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255, 0.1), rgba(255,255,255, 0.1))',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            border: '1px solid rgba(255,255,255,0.18)',
            fontFamily: 'var(--font-code)',
        }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 rounded-lg shadow-lg"
            >
                <h3 className="text-3xl glow-text font-bold text-color-1 mb-4">
                    Contact Form
                </h3>
                {/* Use CustomInput for Name */}
                <CustomInput
                    label="Name"
                    id="name"
                    type="text"
                    register={register}
                    error={errors.name?.message}
                />
                {/* Use CustomInput for Email */}
                <CustomInput
                    label="Email"
                    id="email"
                    type="email"
                    register={register}
                    error={errors.email?.message}
                />
                {/* Message input is a textarea, so handle it separately */}
                <div className="mb-4">
                    <label htmlFor="message"
                           className="block glow-text font-semibold text-planetGreen mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        className={`w-full text-lightGray bg-darkModeGray p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-1${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <Button
                    type="submit"
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ContactForm;

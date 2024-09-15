export const CONTACT_MESSAGE = `If you have any questions or just want to say hello, feel free to drop me a message. I’m always open to new opportunities and collaborations.`;

export const ABOUTME_MESSAGES = [
    " My goal is to build innovative and impactful web applications, with a focus on creating\n" +
    "                        intuitive and visually compelling user experiences.",
    "Over the past year at CodeCool, I’ve gained hands-on experience with the MERN stack and full\n" +
    "                        stack development using JavaScript and Java.",
    "Outside of work, I love talking about basketball and boxing, going camping with friends, and " +
    "getting lost in music and video games."
];

export const FRONTEND_SKILLS = [
    {
        name: 'Javascript',
        logo: '/logos/javascript.svg',
        desc: 'Adds interactivity to web pages.',
        link: 'https://www.javascript.com/'
    },
    {
        name: 'React',
        logo: '/logos/react-2.svg',
        desc: 'Library for component-based user interfaces.',
        link: 'https://react.dev/'
    },
    {
        name: 'TailwindCSS',
        logo: '/logos/tailwindcss.svg',
        desc: 'CSS framework to build custom designs directly in HTML.',
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'Next.js',
        logo: '/logos/next-js.svg',
        desc: 'Enables server-side rendering, static site generation, and routing.',
        link: 'https://nextjs.org/'
    },
    {
        name: 'Framer Motion',
        logo: '/logos/framer-motion.svg',
        desc: 'Library for creating animations and transitions with intuitive APIs.',
        link: 'https://www.framer.com/motion/'
    },
]

export const BACKEND_SKILLS = [
    {
        name: 'Java',
        logo: '/logos/java-14.svg',
        desc: 'Versatile, object-oriented programming language.',
        link: 'https://www.java.com/'
    },
    {
        name: 'Spring Boot',
        logo: '/logos/springboot.svg',
        desc: 'Framework for building Java applications with minimal setup.',
        link: 'https://spring.io/'
    },
    {
        name: 'Node.js',
        logo: '/logos/nodegreenicon.svg',
        desc: 'Allows JavaScript to be used for server-side development.',
        link: 'https://nodejs.org/'
    },
    {
        name: 'Express',
        logo: '/logos/express.svg',
        desc: 'Framework for building web applications in Node.js.',
        link: 'https://expressjs.com/'
    },
]

export const bankingProject = {
    id: 1,
    title: "Horizon Banking",
    description: "Banking app with authentication and secured transfer.",
    images: [
        {
            image: "/projects/banking/images/homepage.png",
            alt: "Banking homepage showing cards and transfers.",
            desc: "The homepage shows account balances, active cards, and recent transactions, with quick access to transfers and other features via the top navigation bar."
        },
        {
            image: "/projects/banking/images/mybanks.png",
            alt: "User's bank accounts overview page",
            desc: "A page displaying all bank accounts and linked cards, including balances and transaction keys, with easy access through the navigation bar."
        },
        {
            image: "/projects/banking/images/sign-up.png",
            alt: "Sign-Up form",
            desc: "A simple, Zod-validated sign-up form that ensures secure authorization and authentication for new users."

        },
        {
            image: "/projects/banking/images/transactionhistory.png",
            alt: "Transaction history page",
            desc: "A transaction history page showing status, amount, date, and category of each transaction across accounts."
        },
        {
            image: "/projects/banking/images/transferfounds.png",
            alt: "Transfer founds page",
            desc: "A page for transferring funds, secured with a secret key to ensure transaction safety."
        }
    ],
    technologies: [
        {
            name: "Next.js",
            logo: "/logos/next-js.svg"
        },
        {
            name: "TypeScript",
            logo: "/logos/typescript.svg"
        },
        {
            name: "TailwindCSS",
            logo: "/logos/tailwindcss2.svg"
        },
        {
            name: "Appwrite",
            logo: "/logos/appwrite.svg"
        },
        {
            name: "Plaid",
            logo: "/logos/plaid.svg"
        },
        {
            name: "Dwolla",
            logo: "/logos/dwolla.svg"
        },
        {
            name: "Sentry",
            logo: "/logos/sentry2.svg"
        },
    ],
    link: "https://banking-six-delta.vercel.app/sign-in"
};

export const linkedInSVG = "M22.23 0H1.77C.792 0 0 .774 0 1.726v20.548C0 23.225.792 24 1.77 24h20.46C23.208 24 24 23.225 24 22.274V1.726C24 .774 23.208 0 22.23 0zM7.09 20.452H3.55V9H7.09v11.452zM5.32 7.577c-1.13 0-1.99-.89-1.99-1.98s.86-1.98 1.99-1.98c1.13 0 1.99.89 1.99 1.98s-.86 1.98-1.99 1.98zM20.452 20.452h-3.538v-5.886c0-1.406-.028-3.214-1.961-3.214-1.964 0-2.264 1.536-2.264 3.114v5.986H9.086V9h3.396v1.561h.046c.474-.9 1.637-1.85 3.37-1.85 3.603 0 4.271 2.37 4.271 5.453v6.288h-.017z"
export const githubSVG = "M12 2C6.48 2 2 6.48 2 12c0 4.418 2.868 8.167 6.84 9.486.5.093.682-.217.682-.483 0-.237-.009-.867-.014-1.704-2.782.606-3.369-1.35-3.369-1.35-.453-1.148-1.107-1.453-1.107-1.453-.906-.617.069-.605.069-.605 1 .07 1.528 1.027 1.528 1.027.894 1.508 2.34 1.07 2.91.818.092-.648.35-1.07.637-1.315-2.22-.253-4.56-1.111-4.56-4.94 0-1.091.39-1.989 1.029-2.688-.103-.254-.447-1.277.097-2.662 0 0 .84-.27 2.75 1.027A9.601 9.601 0 0 1 12 8.158a9.63 9.63 0 0 1 2.497.34c1.91-1.297 2.75-1.027 2.75-1.027.545 1.385.2 2.408.1 2.662.641.698 1.029 1.597 1.029 2.688 0 3.84-2.343 4.686-4.57 4.93.36.31.68.921.68 1.85 0 1.335-.012 2.415-.012 2.743 0 .266.18.578.69.481A9.975 9.975 0 0 0 22 12c0-5.52-4.48-10-10-10z"


export const tabs = [
    {
        icon: "/lottie/vroom.lottie",
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 200,
    },
    {
        icon: "/lottie/stars.lottie",
        title: "Transaction history",
        isNew: false,
        backgroundPositionX: 50,
        backgroundPositionY: 100,
        backgroundSizeX: 150,
    },
    {
        icon: "/lottie/click.lottie",
        title: "Cards and top categories",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 40,
        backgroundSizeX: 177,
    },
];

export const heroText = "Hi, I'm a junior full stack developer with a strong passion for frontend.".split(' ');
export const heroText2 = "I craft user-focused applications that are both beautiful and functional.".split(' ');
export const myName = 'ZSOMBOR PÓCS';
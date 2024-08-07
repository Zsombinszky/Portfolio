import Hero from "@/app/components/Hero";
import Technologies from "@/app/components/Technologies";
import AboutMe from "@/app/components/AboutMe";
import Contact from "@/app/components/Contact";
import Projects from "@/app/components/Projects"; // Import the Technologies component

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero/>
            <Technologies/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </main>
    );
}

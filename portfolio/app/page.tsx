import Hero from "@/app/components/Hero";
import Technologies from "@/app/components/Technologies"; // Import the Technologies component

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero /> {/* Your Hero component */}
            <Technologies /> {/* Your Technologies component */}
        </main>
    );
}

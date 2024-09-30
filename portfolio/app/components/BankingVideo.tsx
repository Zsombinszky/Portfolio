import React from 'react'

const BankingVideo = () => {
    return (
        <section
            className="relative h-screen w-full flex justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: 'url(/projects/banking/images/bankingvideobg1.png)'}}>
            <div className="flex mt-24 p-4 flex-col items-center">
                <h1 className="~text-3xl/5xl text-darkModeGray font-semibold mb-8">See the Banking App in Action</h1>
                <h2 className="~text-2xl/4xl glow-text-2 text-color-10 font-bold mb-8">Watch the Demo!</h2>
                <div className="flex justify-center p-4 bg-black/60 rounded-xl">
                    <video
                        src="/projects/banking/videos/sign-in.mp4"
                        controls
                        className="w-[640px] h-[420px] md:w-[640px] md:h-[480px] lg:w-[960px] lg:h-[540px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}
export default BankingVideo

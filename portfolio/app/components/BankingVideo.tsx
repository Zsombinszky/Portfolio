import React from 'react'

const BankingVideo = () => {
    return (
        <section className="relative h-screen w-full flex justify-center overflow-hidden bg-cover bg-no-repeat bg-center"
                 style={{backgroundImage: 'url(/projects/banking/images/bankingvideobg1.png)'}}>
            <div className="flex mt-12 flex-col items-center">
                <h1 className="text-5xl text-black font-semibold mb-8">See the Banking App in Action</h1>
                <h2 className="text-4xl text-black font-bold mb-8">Watch the Demo!</h2>
                <div className="flex justify-center p-6 bg-black/60 rounded-xl">
                    <video
                        src="/projects/banking/videos/sign-in.mp4"
                        controls
                        className="w-[960px] h-[540px] rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}
export default BankingVideo

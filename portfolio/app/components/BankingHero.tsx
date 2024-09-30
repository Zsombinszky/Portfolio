'use client';
import React from "react";
import FeatureTabs from "@/app/components/FeatureTabs";


export const BankingHero: React.FC = () => {
    return (
        <section
            className="h-screen w-full overflow-hidden bg-center bg-cover bg-no-repeat flex justify-center"
            style={{
                backgroundImage: `url(/projects/banking/images/bankingherobg.png)`,
            }}>
            <div>
                <h2 className="~text-3xl/6xl text-color-8 mt-24 glow-text-2 font-semibold text-center tracking-tight">Horizon
                    Banking</h2>
                <p className="text-lightGray glow-text-2 ~text-base/xl font-semibold tracking-tight text-center my-6">
                    Your Digital Vault: Secure <span className="text-blue-300">Transfers</span> and Smart <span
                    className="text-blue-300">Authentication</span>
                </p>
                <FeatureTabs/>
            </div>
        </section>
    );
};

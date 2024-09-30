import React from 'react'

const CurvedTitle = () => {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center">
            {/* SVG for curved text */}
            <svg viewBox="0 0 400 200"
                 className="w-[60%] max-w-[600px] absolute top-0 transform translate-x-7">
                <path id="curve" d="M 0 150 C 100 50, 300 50, 400 150"/>
                <text width="500">
                    <textPath href="#curve" startOffset="50%" textAnchor="middle" fill="#858DFF"
                              className="text-5xl glow-text font-bold">
                        Tech Arsenal
                    </textPath>
                </text>
            </svg>
        </div>
    )
}
export default CurvedTitle

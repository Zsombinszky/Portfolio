import React from 'react'

const CurvedTitle = () => {
    return (
        <div className="h-screen w-auto flex flex-col items-center justify-center">
            {/* SVG for curved text */}
            <svg width="400" height="200" viewBox="0 0 400 200"
                 className="absolute top-0 transform translate-x-7">
                <path id="curve" d="M 0 150 C 100 50, 300 50, 400 150"/>
                <text width="500">
                    <textPath href="#curve" startOffset="50%" textAnchor="middle" fill="#858DFF"
                              className="text-[3.5rem] glow-text font-bold">
                        Tech Arsenal
                    </textPath>
                </text>
            </svg>
        </div>
    )
}
export default CurvedTitle

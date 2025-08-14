import React from 'react'

export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent fade-item" style={{ opacity: 0, transform: 'translateY(0%)' }}>{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 fade-item" style={{ opacity: 0, transform: 'translateY(0%)' }}>{title}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-w-md mx-auto fade-item" style={{ opacity: 0, transform: 'translateY(0%)' }}>{description}</p>
        </>
    )
}

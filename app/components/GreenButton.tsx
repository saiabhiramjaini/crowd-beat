"use client";

interface GreenButtonProps {
    text: string;
    onClick: () => void;
}

export const GreenButton = ({text, onClick}: GreenButtonProps) => {
    return (
        <button 
        className="bg-primarygreen text-white font-spline px-3 py-1 text-sm rounded-md hover:bg-mist hover:text-primarygreen hover:border hover:border-primarygreen"
        onClick={onClick}> {text} </button>
    )
}
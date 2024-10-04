"use client";

interface LandingGreenButtonProps {
    text: string;
}

export const LandingGreeenButton = ({text}: LandingGreenButtonProps) => {
    return (
        <button 
        className="bg-primarygreen text-white font-spline px-3 py-1 text-sm rounded-md hover:bg-mist hover:text-primarygreen hover:border hover:border-primarygreen"
        onClick={()=>{}}> {text} </button>
    )
}
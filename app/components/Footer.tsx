import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return(
        <div className="h-1/4 p-8">
            <div className="flex justify-center items-center gap-5">
            <RiTwitterXLine className="text-xl"/>
            <FaInstagram className="text-xl"/>
            <FaFacebook className="text-xl"/>
            </div>
            
            <div className="flex justify-center items-center mt-2">
            © 2024 CrowdBeat Ltd. All Rights Reserved.
            </div>
        </div>
    )
}
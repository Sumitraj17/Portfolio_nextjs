import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"

const Footer=()=>{
    return(
        <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Sumit Raj</h1>
            <div className="flex space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/sumit-raj-8043ba229/" className="hover:text-gray-300">
                    <FaLinkedin size={34}/>
                </a>
                <a href="https://github.com/Sumitraj17" className="hover:text-gray-300">
                    <FaGithub size={34}/>
                </a>
                <a href="https://www.instagram.com/dark_eyes008?utm_source=qr" className="hover:text-gray-300">
                    <FaInstagram size={34}/>
                </a>
            </div>

        </div>
    )
}

export default Footer;
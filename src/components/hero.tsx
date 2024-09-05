"use client";
import Image from "next/image";
import cursor from '../assets/icon1.png';
import lightning from '../assets/icon2.png';
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";

const Hero = () => {
    return (

        <div className="py-24 relative overflow-clip bg-gradient-to-b from-black via-[#2B1942] to-[#DBAF6E] text-white/70">
           <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,_#000_80%,_#2B1942)]"></div>

           <div className="relative">
            <div className="text-8xl font-bold text-center">
                <h1 className="text-[#98B4CE]">Hi, I&apos;m</h1>
                <h1 className="text-[#E48A57]">Sumit Raj</h1>
            </div>

           <div>
           <motion.div
                className="hidden md:block absolute left-[250px] top-[150px]"
                drag
            >
                <Image
                    src={cursor}
                    height="170"
                    width="170"
                    alt="cursor"
                    className=""
                    draggable="false"
                />
            </motion.div>

            <motion.div
                className="hidden md:block absolute right-[220px] top-[20px]"
                drag
            >
                <Image
                    src={lightning}
                    height="120"
                    width="120"
                    alt="cursor"
                    className=""
                    draggable="false"
                />
            </motion.div>
           </div>
           
           <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80" >
            I&apos;m a full-stack developer focused on creating websites that provide the best experience for users.
           </p>
           <Image
                src={profilepic}
                alt="profilepic"
                className="h-auto w-auto mx-auto"
           />
           </div>
        </div>
    );
}

export default Hero;

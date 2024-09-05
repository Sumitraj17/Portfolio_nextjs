"use client"
import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaSquareJs,FaJava,FaGitAlt,FaAngular,FaNodeJs } from 'react-icons/fa6'
import { BiLogoMongodb,BiLogoTypescript,BiLogoCPlusPlus } from "react-icons/bi";
import { DiMysql } from "react-icons/di";

const skillIcon = [
    {icon: <FaHtml5 size={140} />, label: 'HTML'},
    {icon: <FaCss3Alt size={140} />, label: 'CSS'},
    {icon: <FaReact size={110} />, label: 'React'},
    {icon: <FaSquareJs size={140} />, label: 'JavaScript'},
    {icon: <FaJava size={140} />, label: 'JAVA'},
    {icon: <BiLogoCPlusPlus size={140} />, label: 'C++'},
    {icon: <FaNodeJs size={140} />, label: 'NodeJS'},
    {icon: <FaGitAlt size={140} />, label: 'Git'},
    {icon: <FaAngular size={110} />, label: 'Angular'},
    {icon: <BiLogoMongodb size={140} />, label: 'MongoDB'},
    {icon: <DiMysql size={140} />, label: 'MySQL'},
    {icon: <BiLogoTypescript size={140} />, label: 'TypeScript'},
   
]

const Skills = () => {
    return (
        <div 
            className='bg-gradient-to-t from-black to-[#381a5f] py-32'
            style={{ backgroundImage: 'linear-gradient(to top, #000, #381a5f 80%)' }}
        >
            <div className='text-white w-[400px]  md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcon.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] md:h-[220px] w-full flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl overflow-hidden'
                        >
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;

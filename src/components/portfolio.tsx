"use client";
import react from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "@/assets/Verifeye.jpg";
import project1 from "@/assets/academic.jpg";
import project2 from "@/assets/nextstore.jpg"

const projects = [
  {
    title: "VerifEye",
    desc: "VerifEye is a powerful application designed to identify fake news and provide counter-narratives.With a ReactJS frontend and a Flask backend utilizing the Cohere API, VerifEye verifies statements, delivers confidence levels, and, if false, offers detailed counter-narratives. It aims to combat misinformation by providing accurate and reliable information to users.",
    devstack: "MongoDB, ExpressJS, NodeJS, React, Flask",
    link: "#",
    git: "https://github.com/Sumitraj17/VerifEye",
    src: project,
  },
  {
    title: "Academic Insight",
    desc: "Academic Insight is a collaborative record management system for students and teachers. Students can access their marks and attendance anytime, while teachers benefit from streamlined IA handlingand mark finalization. This reduces workload and fosters a more transparent learning environment.",
    devstack: "React, TypeScript, NodeJS, MySQL, ExpressJS",
    link: "#",
    git: "https://github.com/Sumitraj17/Academic-Insight",
    src: project1,
  },
  {
    title: "NexStore",
    desc: "NexStore is a modern Angular web app with category navigation, price sorting, and customizable viewing optionsfor a seamless shopping experience. It features essential cart functionalities like price calculation and product management.",
    devstack: " Angular, TypeScript",
    link: "#",
    git: "https://github.com/Sumitraj17/NexStore-WebShop",
    src: project2,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white/70 bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      id="portfolio"
    >
      <h1 className="text-white text-center text-6xl max-w-[700px] mx-auto font-semibold  ">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-32 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex  flex-col ${
              index % 2 == 1
                ? "md:flex-row-reverse gap-12"
                : "md:flex-row gap-12"
            }`}
          >
            <div className="space-y max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70 ">{`0${
                index + 1
              }`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devstack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[300px] w-[450px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

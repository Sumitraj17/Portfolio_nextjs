"use client"
import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"
import Image from "next/image"
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"

const Contact = () => {
    return (
      <div
        className="flex justify-center items-center min-h-screen"  // This ensures full-screen height and center alignment
        id="contact"
      >
        <div
          className="max-w-[1000px] mx-auto flex flex-col justify-center items-center lg:flex-row text-white/70 p-8 rounded-lg space-y-0 lg:space-x-8"
        >
          <div className="flex justify-center items-center">
            <ul className="space-y-4">
              <li className="flex items-center">
                <Image
                  src={phone}
                  alt="phone"
                  className="h-[110px] w-auto mr-6"
                />
                <p className="text-xl">+91 9986252100</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={mail}
                  alt="mail"
                  className="h-[110px] w-auto mr-6"
                />
                <p className="text-xl">rajsumit1793@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 rounded-xl max-w-[600px]">
            <h2 className="text-5xl font-bold text-orange-400 mb-4">
              Let's Connect
            </h2>
            <p className="text-white/70 mb-6">
              Send a message and let's schedule a call!
            </p>
            <form className="space-y-4"  action="https://getform.io/f/bxojpoya" method="POST">
              <div className="flex space-x-4">
                <input
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:rind-2 focus:ring-orange-400"
                  placeholder="FirstName"
                  type="text"
                  name="FirstName"
                />
                <input
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:rind-2 focus:ring-orange-400"
                  placeholder="LastName"
                  type="text"
                  name="LastName"
                />
              </div>

              <div className="flex space-x-4">
                <input
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:rind-2 focus:ring-orange-400"
                  placeholder="Email"
                  type="email"
                  name="Email"
                />
                <input
                  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:rind-2 focus:ring-orange-400"
                  placeholder="Phone"
                  type="number"
                  name="Phone"
                />
              </div>

              <textarea className="bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your Message" name="message" />

              <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full  rounded-xl font-semibold text-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;

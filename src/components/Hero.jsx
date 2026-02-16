// HeroSimple.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProfileImage from "../assets/profile.jpg"
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
const HeroSimple = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-gray-900 flex items-center justify-center relative overflow-hidden">

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.15) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Left Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-left"
                    >
                        {/* Main Heading - Exactly as your design */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Hi all 👋 I'm{' '}
                            <span className="text-purple-400 relative inline-block">
                                Haseeb Hassan
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                            </span>
                        </h1>

                        {/* Description - Exactly as your design */}
                        <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                            A passionate Full Stack Software Developer ✨ having an experience of
                            building Web applications with JavaScript / Reactjs / Nodejs / Mongodb
                            and some other cool libraries.
                        </p>

                        {/* Social Icons - Exactly as your design */}
                        <div className="flex items-center space-x-4 mb-8">
                            <a
                                href="https://www.linkedin.com/in/haseeb30/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#0077b5] hover:text-white transition-all duration-300 text-xl group"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://github.com/itsHaseeb-Hassan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#333] hover:text-white transition-all duration-300 text-xl group"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/923143799124"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:bg-[#25D366] hover:text-white transition-all duration-300 text-xl group"
                                aria-label="WhatsApp Me"
                            >
                                <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        {/* Buttons - Exactly as your design */}
                        <div className="flex flex-wrap gap-6 items-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                                CONTACT ME
                            </button>

                            <a
                                href="https://drive.google.com/file/d/1gBerAG-0gmRzXv80k0DwMUUVQNwIiqrp/view?usp=drive_link"  // yahan apna Google Drive CV link daal do
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 rounded-lg text-white font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                            >
                                SEE MY RESUME
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 flex justify-center md:justify-end"
                    >
                        <div className="relative">
                            {/* Profile Image */}
                            <div className="relative w-72 h-72 md:w-80 md:h-80">
                                {/* Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-spin-slow" />

                                {/* Image */}
                                <img
                                    src={ProfileImage}
                                    alt="Haseeb Hassan"
                                    className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover border-4 border-gray-900"
                                />

                                {/* Online Status */}
                                <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 border-4 border-gray-900 rounded-full" />
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500">
                                <span className="text-sky-400">React</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-green-400">Node</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-purple-400">MongoDB</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSimple;
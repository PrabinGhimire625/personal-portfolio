import React from "react";
import heroImg from "../assets/heroImg.jpg";
import { Briefcase, Code, Users } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative  bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 sm:px-8 lg:px-16 py-12 lg:py-20"
        >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100 rounded-full opacity-40 blur-3xl" />
                <div className="absolute bottom-32 left-16 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div className="text-center lg:text-left space-y-8">
                        {/* Main Heading */}
                        <div className="space-y-4 mt-16">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                                    Prabin
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 font-light">
                                MERN-Stack & Java Developer
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            I craft digital experiences that blend beautiful design with robust
                            functionality. Specialized in{" "}
                            <span className="text-purple-600 font-semibold">MERN Stack</span>{" "}
                            development, creating scalable web applications that users love.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a href="#contact" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                                Let's Connect
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </a>
                            <a
                                href="#project"
                                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-purple-300 hover:text-purple-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block"
                            >
                                View My Work
                            </a>

                        </div>
                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8 max-w-lg mx-auto lg:mx-0">
                            {[
                                {
                                    number: "2+",
                                    label: "Years Experience",
                                    icon: <Briefcase className="w-6 h-6 text-purple-600 mx-auto" />,
                                },
                                {
                                    number: "30+",
                                    label: "Projects Completed",
                                    icon: <Code className="w-6 h-6 text-purple-600 mx-auto" />,
                                    href: "#project",
                                },
                                {
                                    number: "15+",
                                    label: "Happy Clients",
                                    icon: <Users className="w-6 h-6 text-purple-600 mx-auto" />,
                                    href: "#testimonial",
                                },
                            ].map((stat, i) => {
                                const Card = (
                                    <div
                                        className="text-center px-4 py-4 rounded-lg bg-white shadow-md
        hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300"
                                    >
                                        <div className="mb-2">{stat.icon}</div>
                                        <div className="text-xl font-bold text-gray-900">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                );

                                return stat.href ? (
                                    <a key={i} href={stat.href} className="block cursor-pointer">
                                        {Card}
                                    </a>
                                ) : (
                                    <div key={i}>{Card}</div>
                                );
                            })}
                        </div>




                    </div>

                    {/* Right Side - Clean Image */}
                    <div className="flex justify-center lg:justify-end">
                        {/* Main Image Container */}
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30"></div>
                            {/* Image Container */}
                            <div className="relative z-10 w-full h-full rounded-full overflow-hidden 
                bg-gradient-to-br from-gray-50 to-gray-100 p-4 
                shadow-xl border border-gray-200/50 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-2xl">
                                <img
                                    src={heroImg}
                                    alt="Prabin Ghimire - Full Stack Developer"
                                    className="w-full h-full object-cover rounded-full"
                                />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

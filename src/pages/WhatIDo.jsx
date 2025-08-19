import React from "react";
import { User, Code, Layout, ArrowRight, Sparkles, Globe, Palette } from "lucide-react";

const WhatIDo = () => {
    return (
        <div id="service" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-5xl lg:text-6xl font-bold">
                            What I Do?
                        </h2>

                        <div className="space-y-6 text-gray-700">
                            <p className="text-xl leading-relaxed">
                                I am a <span className="text-purple-600 font-semibold">freelancer</span> and{" "}
                                <span className="text-pink-600 font-semibold">full-stack web developer</span> with expertise in UI/UX design.
                                I craft modern web applications that are visually appealing, responsive, and highly functional.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-600">
                                From music apps to e-commerce platforms and admin dashboards, I handle everything
                                from design to development and deployment, helping businesses bring their ideas to life.
                            </p>
                        </div>

                        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-purple-500 hover:to-pink-500 hover:shadow-xl hover:-translate-y-1">
                            <a
                                href="#contact"
                                className="flex items-center gap-2 group"
                            >
                                Say Hello
                                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                            </a>

                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        {/* Freelancer Card */}
                        <div className="group relative">
                            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            Freelancer
                                            <Sparkles className="w-5 h-5 text-purple-500" />
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            I work independently with clients, managing projects from concept to completion,
                                            delivering high-quality web solutions tailored to client needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Designer Card */}
                        <div className="group relative">
                            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-xl shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl">
                                        <Palette className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            UI/UX Designer
                                            <Layout className="w-5 h-5 text-pink-500" />
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            I design intuitive and visually appealing interfaces that enhance user experience,
                                            combining usability with modern aesthetics for engaging web applications.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full-Stack Web Developer Card */}
                        <div className="group relative">
                            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                                        <Globe className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            Full-Stack Web Developer
                                            <Code className="w-5 h-5 text-blue-500" />
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            I build robust web applications using React, Node.js, Express, and modern databases,
                                            ensuring responsiveness, scalability, and maintainability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIDo;

import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  const skills = [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "TypeScript",
    "MySQL",
    "Java",
    "C#"
  ];


  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute -top-10 -left-10 w-[460px] h-[460px] 
                            bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-100 
                            rounded-3xl shadow-xl rotate-3"></div>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-[380px] lg:h-[380px] 
                         rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={aboutImg}
                alt="Prabin Ghimire"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Prabin Ghimire</span>, a MERN Stack Developer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              With <span className="font-semibold text-purple-600">3+ years of experience</span>, I create modern, scalable web applications
              using React, Node.js, MongoDB, and Express.js. I focus on clean, maintainable
              code and delivering great user experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Nepal, I collaborate with clients worldwide to build products
              that solve real problems and delight users.
            </p>

            {/*Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white border-2 border-purple-100 text-purple-700 
                             rounded-xl font-medium text-sm shadow-md hover:border-purple-300 
                             hover:shadow-lg transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Prabin_Ghimire_CV.pdf"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 
                           rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#project"
                className="bg-white border-2 border-purple-200 text-purple-600 px-8 py-3 
                           rounded-xl font-semibold hover:bg-purple-50 hover:border-purple-400
                           shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
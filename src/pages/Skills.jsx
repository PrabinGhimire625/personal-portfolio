import React from "react";
import { motion } from "framer-motion";
import { User, Zap, Palette, Sparkles } from "lucide-react";

const coreSkills = [
  { name: "MERN Stack Development", level: 95, gradient: "from-blue-500 to-cyan-400" },
  { name: "Video Editing", level: 90, gradient: "from-green-500 to-lime-400" },
  { name: "Data Entry", level: 85, gradient: "from-teal-400 to-green-400" },
  { name: "Typing", level: 95, gradient: "from-purple-500 to-indigo-400" },
  { name: "Instructor", level: 98, gradient: "from-red-500 to-pink-400" },
];

const softSkills = [
  { name: "Teamwork", icon: <User className="w-5 h-5" />, gradient: "from-blue-400 to-indigo-500" },
  { name: "Problem Solving", icon: <Zap className="w-5 h-5" />, gradient: "from-yellow-400 to-orange-500" },
  { name: "Creativity", icon: <Palette className="w-5 h-5" />, gradient: "from-pink-400 to-purple-500" },
];

const Skills = () => {
  return (
    <section id="skill" className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 justify-center mb-4">
            <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
            <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">My Skillset</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leveraging technical knowledge and creative abilities to deliver outstanding solutions.
          </p>
        </motion.div>

        {/* Core Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Core Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <span className="text-gray-900 font-semibold mb-3 block">{skill.name}</span>
                {/* Animated Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
                  {skill.icon}
                </div>
                <span className="text-gray-900 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

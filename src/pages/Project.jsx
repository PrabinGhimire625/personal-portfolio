import React, { useState } from "react";
import heroImg from "../assets/heroImg.jpg";
import dashboard from "../assets/dashboard.png";
import bookLibrary from "../assets/bookLibrary.jpg";
import tuneCasa from "../assets/tuneCasa.png";
import khalti from "../assets/khalti.webp";
import chatApp from "../assets/chatApp.png";
import ecommerce from "../assets/ecommerce.webp";
import ProjectModal from "./ProjectModel";

const blogs = [
    {
        id: 1,
        title: "TuneCasa",
        category: "Web App Development",
        date: "Aug 19, 2025",
        description:
            "Step-by-step journey of creating TuneCasa, a music listening web app with artist collaboration, offline listening, and monetized ads.",
        img: tuneCasa,
    },
    {
        id: 2,
        title: "BookLibrary",
        category: "Web App Development",
        date: "Jul 10, 2025",
        description:
            "Designing and developing BookLibrary, a responsive online platform to manage books, user accounts, and borrowing features.",
        img: bookLibrary,
    },
    {
        id: 3,
        title: "E-Commerce Platform",
        category: "Web Development",
        date: "Jun 25, 2025",
        description:
            "Building a full-featured e-commerce platform with product management, seamless navigation, and responsive design.",
        img: ecommerce,
    },
    {
        id: 4,
        title: "Admin Dashboard Project",
        category: "UI/UX Design",
        date: "May 15, 2025",
        description:
            "Creating a responsive admin dashboard with charts, user management, and analytics tracking.",
        img: dashboard,
    },
    {
        id: 5,
        title: "Real-Time Chat App",
        category: "Web App Development",
        date: "Apr 10, 2025",
        description:
            "Developed a real-time chat application with Socket.IO, private messaging, and group chat support.",
        img: chatApp,
    },
    {
        id: 6,
        title: "Payment Integration System",
        category: "Web Development",
        date: "Mar 30, 2025",
        description:
            "Integrated secure payment gateways and subscription features for web applications.",
        img: khalti,
    },
];

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div
            id="project"
            className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl" />
                <div className="absolute bottom-20 right-16 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Insights and stories about how I built my projects from scratch,
                        sharing the challenges, solutions, and lessons learned along the way.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                    {/* Horizontal Scroll Container */}
                    <div className="overflow-x-auto scrollbar-hide pb-4">
                        <div className="flex space-x-6 px-2" style={{ width: "max-content" }}>
                            {blogs.map((blog, index) => (
                                <div
                                    key={blog.id}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 flex-shrink-0 transform hover:-translate-y-2 transition-all duration-500"
                                    style={{
                                        width: "clamp(280px, 23vw, 320px)",
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                                        <img
                                            src={blog.img}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {blog.description}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="pt-2">
                                            <button
                                                onClick={() => {
                                                    setSelectedProject(blog);
                                                    setIsModalOpen(true);
                                                }}
                                                className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                            >
                                                Read More
                                                <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                                                    →
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className={`h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>Scroll to see more</span>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                            <div
                                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
            />

            {/* Styles */}
            <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
};

export default Project;

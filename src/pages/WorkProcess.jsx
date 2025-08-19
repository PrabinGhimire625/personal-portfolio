import React from "react";
import { Code, Server, Bug, Rocket } from "lucide-react";

const WorkProcess = () => {
    const steps = [
        {
            id: 1,
            title: "Plan",
            description:
                "I begin every project by gathering requirements, defining the tech stack, and breaking tasks into milestones. This ensures a clear roadmap before development starts.",
            icon: <Server className="w-7 h-7" />,
            color: "from-blue-500 to-purple-600",
            bgColor: "from-blue-50 to-purple-50",
            accentColor: "bg-blue-500",
        },
        {
            id: 2,
            title: "Build",
            description:
                "I implement features using clean, efficient, and reusable code. Following best practices, design patterns, and version control keeps the project maintainable and scalable.",
            icon: <Code className="w-7 h-7" />,
            color: "from-purple-500 to-pink-600",
            bgColor: "from-purple-50 to-pink-50",
            accentColor: "bg-purple-500",
        },
        {
            id: 3,
            title: "Test",
            description:
                "I conduct unit testing, integration testing, and debugging to catch issues early. This ensures the application works reliably across devices and environments.",
            icon: <Bug className="w-7 h-7" />,
            color: "from-pink-500 to-red-500",
            bgColor: "from-pink-50 to-red-50",
            accentColor: "bg-pink-500",
        },
        {
            id: 4,
            title: "Deploy",
            description:
                "I deploy projects to production environments using CI/CD pipelines. Post-deployment, I monitor performance, fix bugs, and apply optimizations for speed and security.",
            icon: <Rocket className="w-7 h-7" />,
            color: "from-green-500 to-teal-600",
            bgColor: "from-green-50 to-teal-50",
            accentColor: "bg-green-500",
        },
    ];

    return (
        <section id="workProcess" className="bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse" />
                <div className="absolute bottom-32 right-16 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">

                    <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight">
                        Work Process
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        I follow an end-to-end development cycle that balances planning,
                        coding, testing, and deployment. This structured workflow ensures
                        projects are delivered with reliability, scalability, and efficiency.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 via-pink-200 to-green-200 transform -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className="group relative"
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                }}
                            >
                                {/* Main Card */}
                                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-white hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
                                    {/* Background Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl`} />

                                    {/* Floating Number Badge */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 text-gray-700 flex items-center justify-center rounded-2xl shadow-lg font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                                        {step.id}
                                    </div>

                                    {/* Icon Container */}
                                    <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                        <div className="text-white">
                                            {step.icon}
                                        </div>

                                        {/* Icon Glow Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150`} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl`} />
                                    <div className="absolute top-4 right-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" />
                                    <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce" style={{ animationDelay: '0.2s' }} />
                                </div>

                                {/* Step Connector for Desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-20">
                                        <div className={`absolute right-0 top-1/2 w-3 h-3 ${step.accentColor} rounded-full transform -translate-y-1/2 shadow-lg animate-pulse`} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-indigo-100/50 rounded-3xl blur-3xl" />

                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-100 shadow-xl">
                        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                            Looking for a developer who values clean code, thorough testing, and reliable deployment?
                            Let's bring your ideas to life with a proven development process.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#contact" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                Let's Build Together
                                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">🚀</span>
                            </a>

                            <button className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-purple-300 hover:text-purple-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                View My Process
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default WorkProcess;
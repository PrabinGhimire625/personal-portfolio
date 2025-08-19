import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-auto relative p-10">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 text-3xl font-bold"
                >
                    ✕
                </button>

                {/* Modal Header */}
                <h2 className="text-4xl font-extrabold mb-2 text-purple-600">{project.title}</h2>
                <p className="text-gray-500 mb-6 text-sm">{project.date} • {project.category}</p>

                {/* Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-56 h-40 object-cover rounded-lg shadow-lg mb-6 mx-auto"
                />

                {/* Content */}
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

                    <p>
                        Welcome to the <strong>{project.title}</strong> project showcase. This project represents a milestone in web development,
                        combining creativity, technical skill, and problem-solving.
                    </p>

                    <h3 className="text-2xl font-semibold text-purple-500">Project Overview</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                    </p>

                    <h3 className="text-2xl font-semibold text-purple-500">Features</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Responsive Design for all devices</li>
                        <li>High performance with fast load times</li>
                        <li>Interactive UI/UX for better engagement</li>
                        <li>Secure user authentication and authorization</li>
                        <li>Real-time updates and notifications</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-purple-500">Challenges Faced</h3>
                    <p>
                        Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
                        Developing complex components and managing state was particularly challenging.
                    </p>

                    <h3 className="text-2xl font-semibold text-purple-500">Code Snippet</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        {`function greetUser(name) {
  return \`Hello, \${name}! Welcome to the project.\`;
}`}
                    </pre>

                    <h3 className="text-2xl font-semibold text-purple-500">Key Takeaways</h3>
                    <p>
                        - Consistency in code structure improves maintainability.<br />
                        - User experience is as important as functionality.<br />
                        - Always test on multiple devices and browsers.
                    </p>

                    <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
                        "Success is the sum of small efforts, repeated day in and day out."
                    </blockquote>

                    <p>
                        More insights and details can be added here to make the modal content longer. Add images, lists, code blocks, quotes, or any text to make it informative.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;

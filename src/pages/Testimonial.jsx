import React from "react";
import { User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Kamesh Chaudary",
    role: "Client",
    feedback:
      "Working with Prabin was an amazing experience. The project was smooth and the results exceeded expectations. Highly recommended!",
  },
  {
    id: 2,
    name: "Achyut Parajuli",
    role: "Client",
    feedback:
      "Prabin delivered a modern and functional web application with great UI/UX design. Communication was perfect and deadlines were met.",
  },
  {
    id: 3,
    name: "Ayush Shah",
    role: "Client",
    feedback:
      "A talented full-stack developer and freelancer. Prabin brings ideas to life with clean code and beautiful design.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          What Clients Say
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it - hear from clients who've experienced exceptional results
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="mb-6 text-gray-700 italic text-base leading-relaxed flex-grow">
                "{testi.feedback}"
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-lg">{testi.name}</p>
                  <p className="text-gray-500">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
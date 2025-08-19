import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You will get the response soon!");
    };

    return (
        <section
            id="contact"
            className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-3 justify-center mb-4">
                        <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" />
                        <span className="text-purple-600 font-semibold uppercase text-sm tracking-wider">
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                        Let’s Work Together
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        I’m always open to freelance projects, collaborations, or exciting
                        opportunities. Drop me a line and let’s build something great!
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-5">
                            {[
                                {
                                    icon: <MapPin className="w-6 h-6 text-purple-600" />,
                                    label: "Address",
                                    value: "Belbari-4, Morang (Nepal)",
                                },
                                {
                                    icon: <Mail className="w-6 h-6 text-purple-600" />,
                                    label: "My Email",
                                    value: "prabinghimire625@gmail.com",
                                },
                                {
                                    icon: <Phone className="w-6 h-6 text-purple-600" />,
                                    label: "Call Me Now",
                                    value: "+977 9822924656",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition"
                                >
                                    <div className="p-3 bg-purple-100 rounded-xl">{item.icon}</div>
                                    <div>
                                        <p className="text-gray-500">{item.label}:</p>
                                        <p className="font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 text-purple-600 text-xl mt-6">
                            {[
                                { icon: <FaFacebookF />, link: "https://www.facebook.com/prabin.ghimire.90281" },
                                { icon: <FaInstagram />, link: "#" },
                                { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/prabin-ghimire-62b9632a3/" },
                                { icon: <FaGithub />, link: "https://github.com/PrabinGhimire625" },
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="p-3 rounded-full bg-white shadow-md cursor-pointer hover:bg-purple-600 hover:text-white transition"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>

                    {/* Right Section - Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-5 bg-white p-8 rounded-3xl shadow-lg"
                    >
                        <p className="text-gray-500 mb-4">
                            I’m always open to discussing product design work or partnership
                            opportunities.
                        </p>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                            required
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location*"
                            value={form.location}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                            required
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="budget"
                                placeholder="Budget*"
                                value={form.budget}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject*"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Message*"
                            value={form.message}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 p-3 bg-transparent focus:outline-none focus:border-purple-600"
                            rows={5}
                            required
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl shadow-md transition w-full"
                        >
                            Submit <Send className="w-4 h-4" />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}


export default Contact
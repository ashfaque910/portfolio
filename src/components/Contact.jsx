import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.from_name.trim()) {
      errors.from_name = "Name is required";
    }

    if (!formData.from_email) {
      errors.from_email = "Email is required";
    } else if (!validateEmail(formData.from_email)) {
      errors.from_email = "Invalid email format";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Invalid phone number (10 digits required)";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const serviceId = "service_txi78pc";
    const templateId = "template_6ikpk9d";
    const publicKey = "GgmW3_k4spqph1gOu";

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(false);
        setSuccess(true);
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
          phone: "",
        
        });
      },
      (error) => {
        console.error("EmailJS failed...", error);
        setLoading(false);
        setError(true);
      }
    );
  };

  return (
    <section id="contact" className="bg-orange-500 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-white">Feel free to drop us a message or connect with us on social media!</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10" style={{boxShadow:'0 0 8px #dddddd'}}>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-orange-500" htmlFor="from_name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 px-4 text-black"
                  required
                />
                {formErrors.from_name && <p className="text-red-500 text-sm mt-1">{formErrors.from_name}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-orange-500" htmlFor="from_email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 px-4 text-black"
                  required
                />
                {formErrors.from_email && <p className="text-red-500 text-sm mt-1">{formErrors.from_email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-orange-500" htmlFor="phone">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 px-4 text-black"
                  required
                />
                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-orange-500" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-100 border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 px-4 text-black"
                  required
                />
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-4">Failed to send message. Please try again later.</p>}
            </form>
          </div>

          {/* Get in Touch / Social Media Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-6 text-orange-500">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">Connect with us through social media!</p>
            <div className="flex space-x-4 mb-8">
              <a href="https://facebook.com/ashfaque.ahmad.7161" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com/ashfaque_a7161" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ashfaque-ahmad-7b84931a4/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className="text-lg text-gray-600">We look forward to hearing from you!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

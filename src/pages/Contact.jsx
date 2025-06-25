import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto px-4 py-20 space-y-12 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-trustPurple dark:text-softPink">
          Get In Touch
        </h2>
        <p className="mt-3 text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          Let's build hope together. Whether you're reaching out to support, collaborate,
          or learn more about our mission — we’d love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-trustPurple dark:text-softPink">
              Ujas Education & Charitable Trust
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A women-led nonprofit uplifting rural lives through education, vocational training, and health awareness.
            </p>
            <div className="text-sm space-y-2 text-gray-700 dark:text-gray-400">
              <p>📍 <strong>Address:</strong> 132 , MarutiNagar , Limbayat, Surat, Gujarat, India</p>
              <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
              <p>✉️ <strong>Email:</strong> contact@ujastrust.org</p>
              {/* <p>🌐 <strong>Website:</strong> www.ujastrust.org</p> */}
            </div>
          </div>

          {/* Surat Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md aspect-video">
            <iframe
              title="Ujas Trust Surat Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14885.181318547798!2d72.83106115!3d21.17024045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5e0c91cfbd%3A0x74fdd2cbbc631c1!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718129999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border dark:border-gray-600 dark:bg-gray-900 p-3 rounded-lg"
            value={form.name}
            onChange={handleChange}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                className="text-red-600 text-sm mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border dark:border-gray-600 dark:bg-gray-900 p-3 rounded-lg"
            value={form.email}
            onChange={handleChange}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                className="text-red-600 text-sm mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border dark:border-gray-600 dark:bg-gray-900 p-3 rounded-lg h-32"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                className="text-red-600 text-sm mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.97 }}
            animate={submitted ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.4 }}
            type="submit"
            className="bg-trustPurple hover:bg-purple-700 dark:bg-softPink dark:hover:bg-pink-400 text-white font-semibold px-6 py-3 rounded-lg w-full"
          >
            Send Message
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 p-4 rounded shadow text-center mt-4"
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: "spring", bounce: 0.3 }}
              >
                ✅ Thank you! Your message has been received.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;

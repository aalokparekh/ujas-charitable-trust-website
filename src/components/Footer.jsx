import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-softBlue to-blue-900 text-white py-16 px-6 mt-28 rounded-t-[3rem] shadow-[0_-20px_40px_-10px_rgba(0,0,0,0.4)] relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Glowing Background Circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -z-10 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Trust Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3 tracking-wide text-white">Ujas Charitable Trust</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Uplifting rural women through education, skills, and healthcare. Together, we light the path to empowerment.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Stay Inspired</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing! 💌");
            }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-softBlue font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-5">
            {[
              { icon: <FaInstagram />, href: "#", label: "Instagram" },
              { icon: <FaFacebookF />, href: "#", label: "Facebook" },
              { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" },
            ].map(({ icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.4, type: "spring" }}
                className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <motion.div
        className="border-t border-white/20 mt-14 pt-5 text-xs text-white/60 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © 2025 Ujas Charitable Trust · Empowering Women, One Village at a Time
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

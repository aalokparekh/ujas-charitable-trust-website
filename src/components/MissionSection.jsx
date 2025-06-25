import { motion } from "framer-motion";
import { FaBookReader, FaTools, FaHeartbeat } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const MissionSection = () => (
  <motion.section
    className="relative z-10 bg-mistyLilac py-20 px-6 text-gray-800"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    <motion.div
      className="max-w-5xl mx-auto text-center"
      variants={fadeInUp}
      custom={1}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-trustPurple mb-4">
        Our Mission
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
        We are committed to fostering dignity, independence, and hope for women in rural communities. Through education, vocational training, and health initiatives, we spark long-term impact and generational change.
      </p>
    </motion.div>

    <motion.div
      className="mt-12 grid gap-8 md:grid-cols-3"
      variants={fadeInUp}
      custom={2}
    >
      {/* Education Card */}
      <motion.div className="bg-white rounded-3xl shadow-xl p-6 text-left border-t-4 border-mutedRose hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3 mb-3 text-trustPurple">
          <FaBookReader className="text-2xl" />
          <h3 className="text-xl font-semibold">Education</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Since <strong>2004</strong>, our Ujas Coaching Classes have empowered hundreds of girls with access to quality education.
          <br /><br />
          A2 grade students receive up to <strong>80% scholarships</strong>. We also provide free <strong>notebooks, stationery, and school bags</strong> to reduce barriers to learning.
        </p>
      </motion.div>

      {/* Skill Development Card */}
      <motion.div className="bg-white rounded-3xl shadow-xl p-6 text-left border-t-4 border-forestGreen hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3 mb-3 text-trustPurple">
          <FaTools className="text-2xl" />
          <h3 className="text-xl font-semibold">Skill Development</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          We offer training in tailoring, arts & crafts, and digital literacy to build self-reliance. Women not only learn skills—they gain confidence and income opportunities.
        </p>
      </motion.div>

      {/* Healthcare Card */}
      <motion.div className="bg-white rounded-3xl shadow-xl p-6 text-left border-t-4 border-softPink hover:shadow-2xl transition duration-300">
        <div className="flex items-center gap-3 mb-3 text-trustPurple">
          <FaHeartbeat className="text-2xl" />
          <h3 className="text-xl font-semibold">Healthcare Access</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Our mobile clinics and health camps reach remote villages, providing <strong>menstrual hygiene awareness, maternal care, and general health checkups</strong> for underserved women and girls.
        </p>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default MissionSection;

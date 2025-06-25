
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => (
  <motion.div
    className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md shadow-xl rounded-3xl p-8 md:p-12 space-y-10"
    initial="hidden"
    animate="visible"
    exit="hidden"
  >
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-trustPurple to-pink-500 drop-shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our Story
    </motion.h2>

    {[
      <>
        <strong className="text-trustPurple underline decoration-pink-300 decoration-4">
          Ujas Education and Charitable Trust
        </strong>{" "}
        was born in the heart of crisis—on{" "}
        <strong className="text-trustPurple">March 25, 2020</strong>, at the onset of the COVID-19 pandemic. While the world shut down, a group of passionate rural women rose to support the most vulnerable: underserved girls and women.
      </>,
      <>
        What began as a small grassroots effort soon transformed into a movement. Ujas first delivered critical relief—food, hygiene kits, support—and then built long-term programs: education, health, skill training, and livelihood empowerment.
      </>,
      <>
        Guided by{" "}
        <strong className="text-trustPurple italic">Beti Bachao, Beti Padhao</strong>, we believe every girl deserves to learn, thrive, and lead. We work to ensure she has that chance—through access to education, mentorship, and safe environments.
      </>,
      <>
        Today,{" "}
        <strong className="text-trustPurple underline decoration-pink-300 decoration-4">
          Ujas Trust
        </strong>{" "}
        stands as a women-led force for transformation. Compassionate, community-rooted, and committed to building a future where every woman shines.
      </>,
    ].map((content, i) => (
      <motion.p
        key={i}
        custom={i}
        variants={paragraphVariants}
        className="text-lg md:text-xl text-gray-800 leading-relaxed"
      >
        {content}
      </motion.p>
    ))}

    <motion.div custom={4} variants={paragraphVariants} className="pt-4 text-center">
      <CTAButton label="See Our Work" link="/work" />
    </motion.div>
  </motion.div>
);

export default AboutSection;

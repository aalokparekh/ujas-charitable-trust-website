import CTAButton from "../components/CTAButton";
import { motion } from "framer-motion";
import MissionSection from "../components/MissionSection";

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

const Home = () => (
  <>
    <motion.section
      className="relative min-h-screen flex items-center justify-center text-center px-4 bg-mistyLilac"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.thestatesman.com/wp-content/uploads/2017/08/1494504446-girl-child-getty.jpg')",
        }}
      ></div>

      {/* Overlay Gradient with Trust Colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-trustPurple/70 via-black/30 to-white/10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white max-w-3xl px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          variants={fadeInUp}
          custom={1}
        >
          Lighting the path for rural women
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 text-white/90 drop-shadow"
          variants={fadeInUp}
          custom={2}
        >
          Ujas Charitable Trust is a women-led organization dedicated to
          empowering rural women through education, skills, and community
          support.
        </motion.p>

        <motion.div variants={fadeInUp} custom={3}>
          <CTAButton label="Learn More" link="/about" />
        </motion.div>
      </div>
    </motion.section>

    {/* Reusable Mission Section */}
    <MissionSection />
  </>
);

export default Home;

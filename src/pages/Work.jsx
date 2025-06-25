import { motion } from "framer-motion";
import CTAButton from "../components/CTAButton";
import Image from "../assets/Helping 2.jpeg";
import image1 from "../assets/Ujas_logo.jpeg";
import image2 from "../assets/Triviaa.jpeg";
import image3 from "../assets/Helping corona.jpeg";
import image4 from "../assets/Helping corona 2.jpeg";
import image5 from "../assets/Helping corona 3.jpeg";
import image6 from "../assets/Helping corona 4.jpeg";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const photos = [image1, image2, image3, image4, image5, image6];

const captions = [
  "Ujas Education and Charitable Trust",
  "Triviaa - Enterprises",
  "Medical aid to rural communities",
  "Distributing essentials during lockdown",
  "Free meals during COVID relief",
  "Free meals during COVID relief - 2",
];

const Work = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Parallax Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900" />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 text-gray-900 dark:text-gray-100"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-trustPurple dark:text-softPink drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>

        <motion.div
          className="bg-white dark:bg-gray-800/90 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ul className="list-disc list-inside space-y-5 text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed">
            {[
              "Empowering rural women through hands-on skill training in tailoring, crafts, and entrepreneurship to foster financial independence and confidence.",
              "Driving community-led education programs focused on increasing enrollment, retention, and academic support for girls in underserved areas.",
              "Organizing health camps and awareness initiatives addressing nutrition, hygiene, maternal and child health, ensuring better access to basic healthcare.",
              "Building women’s self-help groups and leadership forums to strengthen community decision-making and social support networks.",
              "Promoting sustainable and environmentally conscious livelihood projects that uplift entire villages while protecting natural resources.",
              "Collaborating with local schools, health workers, and volunteers to create lasting impact through grassroots involvement and capacity building.",
            ].map((text, i) => (
              <motion.li
                key={i}
                className="font-medium"
                custom={i}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Featured Image */}
        <motion.figure
          className="rounded-xl overflow-hidden shadow-xl max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <img
            src={Image}
            alt="Women skill training - Ujas Trust"
            className="w-full h-auto max-h-[600px] object-cover"
          />
        </motion.figure>

        {/* Caption before gallery */}
        <motion.p
          className="text-center text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Ujas Education and Charitable Trust helping people during the Corona pandemic
        </motion.p>

        {/* Gallery Grid with Hover Captions */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full max-h-[600px] object-cover transition duration-300"
              />

              {/* Hover Caption */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white text-center text-sm sm:text-base font-semibold px-2">
                  {captions[i]}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <CTAButton label="Join Us" link="/contact" />
        </div>
      </motion.div>
    </section>
  );
};

export default Work;

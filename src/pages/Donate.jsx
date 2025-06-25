import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const infoItems = [
  {
    emoji: "🌸",
    title: "Empower Women",
    desc: "Your donation funds skill training and income-generating opportunities.",
  },
  {
    emoji: "📚",
    title: "Educate Girls",
    desc: "Sponsor school supplies, tutors, and workshops for girls in rural communities.",
  },
  {
    emoji: "🩺",
    title: "Provide Healthcare",
    desc: "Support health camps, nutrition kits, and maternal wellness outreach.",
  },
];

const Donate = () => {
  const [donationType, setDonationType] = useState("monthly");
  const [supporterCount, setSupporterCount] = useState(784);
  const [dedication, setDedication] = useState("");

  // Simulate live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setSupporterCount((prev) => prev + Math.floor(Math.random() * 2));
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <motion.div
        className="max-w-5xl mx-auto space-y-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-trustPurple drop-shadow-sm">
            {donationType === "monthly" ? "Just ₹10/month Can Change a Life 💖" : "Make a One-Time Impact 💫"}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {donationType === "monthly"
              ? "With just ₹10 a month, help rural women and girls thrive through education, skills, and healthcare."
              : "A one-time gift helps us reach more villages, more families, and more dreams."}
          </p>

          <div className="text-sm text-gray-600">
            You’re the <span className="font-semibold text-trustPurple">{supporterCount}</span>
            {donationType === "monthly" ? "ᵗʰ monthly supporter!" : "ᵗʰ one-time donor!"}
          </div>

          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-sm font-medium">One-Time</span>
            <button
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                donationType === "monthly" ? "bg-trustPurple" : "bg-gray-300"
              }`}
              onClick={() =>
                setDonationType((prev) => (prev === "monthly" ? "once" : "monthly"))
              }
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  donationType === "monthly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-sm font-medium">Monthly</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dedicate Field */}
        <div className="max-w-md mx-auto">
          <label className="block text-left text-sm text-gray-700 mb-1">
            Want to dedicate this donation? <span className="text-gray-500">(optional)</span>
          </label>
          <input
            type="text"
            value={dedication}
            onChange={(e) => setDedication(e.target.value)}
            placeholder="e.g. In memory of my grandmother"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-trustPurple"
          />
        </div>

        {/* CTA */}
        <div className="mt-10 space-y-4">
          <a
            href="https://razorpay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-trustPurple text-white text-lg font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            {donationType === "monthly" ? "Donate ₹10 Monthly" : "Donate One Time"}
          </a>
          <p className="text-sm text-gray-500">Secure payments via Razorpay</p>

          {dedication && (
            <p className="text-sm italic text-gray-600">
              💌 This donation is dedicated to: <strong>{dedication}</strong>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Donate;

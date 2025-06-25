import AboutSection from "../components/AboutSection";



const About = () => (
  <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 via-white to-purple-50">
    {/* Decorative Background Circles */}
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl" />

    {/* Main Section */}
    <AboutSection />
  </section>
);

export default About;

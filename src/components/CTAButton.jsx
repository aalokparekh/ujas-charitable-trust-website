
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const CTAButton = ({ label, link }) => {
  const isAnchorLink = link.startsWith("#");
  const anchorId = link.replace("#", "");

  return isAnchorLink ? (
    <ScrollLink
      to={anchorId}
      smooth={true}
      duration={800}
      offset={-80} // adjust for sticky headers
      className="cursor-pointer inline-block bg-trustPurple text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
    >
      {label}
    </ScrollLink>
  ) : (
    <RouterLink
      to={link}
      className="inline-block bg-trustPurple text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-300"
    >
      {label}
    </RouterLink>
  );
};

export default CTAButton;

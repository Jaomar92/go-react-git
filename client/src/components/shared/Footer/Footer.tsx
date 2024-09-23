import Go from "../../../assets/Go.png";
import React from "../../../assets/React.png";
import Tailwind from "../../../assets/Tailwindcss.png";
import Github from "../../../assets/Github.png";
const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-8 text-neutral-300">
      <div className="container mx-auto">
        <div>
          <p className="text-md text-center">Site is Powered by:</p>
          <div className="flex items-center justify-center gap-3 pt-3">
            <img src={Go} alt="golang" className="h-10" />
            <img src={React} alt="golang" className="h-10" />
            <img src={Tailwind} alt="golang" className="h-8" />
            <img src={Github} alt="golang" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

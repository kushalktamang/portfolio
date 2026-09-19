import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div className="flex gap-2">
      <div>
        <a
          href="https://github.com/kushalktamang"
          className="cursor text-xl group p-2"
          target="_blank"
        >
          <FaGithub className="transition-transform duration-200 group-hover:scale-120" />
        </a>
      </div>
      <div>
        <a
          href="https://x.com/kushalktamang"
          className="cursor text-xl group p-2"
          target="_blank"
        >
          <FaX className="transition-transform duration-200 group-hover:scale-120" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/kushalktamang/"
          className="cursor text-xl group p-2"
          target="_blank"
        >
          <FaLinkedinIn className="transition-transform duration-200 group-hover:scale-120" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;

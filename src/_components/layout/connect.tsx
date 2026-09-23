import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="mb-0 border-y border-dashed border-border p-3 font-victor-mono sm:mb-7 sm:p-5">
      <h1 className="p-3 font-geist-pixel text-2xl text-dark-cyan">Connect</h1>
      <div className="border-t border-border p-3 text-start sm:p-5">
        <h2 className="text-sm leading-relaxed sm:text-base">
          Reach me at <strong className="break-all text-rose-pine">kushalktamang@gmail.com</strong>{" "}
          or connect on social media below.
        </h2>
      </div>
      {/*------------links social---------------*/}
      <div className="flex flex-wrap items-center justify-center border border-border">
        {/*----------------linkedin-------------------------*/}
        <div className="min-w-25 flex-1">
          <a
            href="https://www.linkedin.com/in/kushalktamang/"
            rel="noopener noreferrer"
            className="group flex cursor items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaLinkedinIn className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              LinkedIn
            </span>
          </a>
        </div>
        {/*------------------------x------------------------*/}
        <div className="min-w-25 flex-1">
          <a
            href="https://x.com/kushalktamang"
            rel="noopener noreferrer"
            className="group flex cursor items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaX className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              x.com
            </span>
          </a>
        </div>
        {/*-----------------github----------------*/}
        <div className="min-w-25 flex-1">
          <a
            href="https://github.com/kushalktamang"
            rel="noopener noreferrer"
            className="group flex cursor items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaGithub className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              Github
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;

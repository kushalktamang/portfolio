import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

function Connect() {
  return (
    <div className="border-y border-border font-victor-mono mb-7">
      <h1 className="font-geist-pixel p-3 text-2xl text-dark-cyan">Connect</h1>
      <div className=" border-t border-border text-start p-5">
        <h2>
          Reach me at{" "}
          <strong className="text-rose-pine">kushalktamang@gmail.com</strong> or
          connect on social media below.
        </h2>
      </div>
      {/*------------links social---------------*/}
      <div className="flex justify-start items-center border-t border-border">
        {/*-----------------github----------------*/}
        <div className="hover:bg-hover">
          <a
            href="https://github.com/kushalktamang"
            className="cursor text-sm group p-3 flex gap-2 items-center border-x border-border"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaGithub className="transition-transform duration-200 group-hover:scale-120" />
              Github
            </span>
          </a>
        </div>
        {/*----------------linkedin-------------------------*/}
        <div className="hover:bg-hover">
          <a
            href="https://www.linkedin.com/in/kushalktamang/"
            className="cursor text-sm group p-3 flex gap-2 items-center border-x border-border"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaLinkedinIn className="transition-transform duration-200 group-hover:scale-120" />
              LinkedIn
            </span>
          </a>
        </div>
        {/*------------------------x------------------------*/}
        <div className="hover:bg-hover">
          <a
            href="https://x.com/kushalktamang"
            className="cursor text-sm group p-3 flex gap-2 items-center border-x border-border"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaX />
              x.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Connect;

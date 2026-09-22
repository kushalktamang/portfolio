import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="border-y border-border border-dashed font-victor-mono mb-7 p-5">
      <h1 className="font-geist-pixel p-3 text-2xl text-dark-cyan">Connect</h1>
      <div className=" border-t border-border text-start p-5">
        <h2>
          Reach me at <strong className="text-rose-pine">kushalktamang@gmail.com</strong> or connect
          on social media below.
        </h2>
      </div>
      {/*------------links social---------------*/}
      <div className="flex justify-evenly items-center border border-border">
        {/*----------------linkedin-------------------------*/}
        <div>
          <a
            href="https://www.linkedin.com/in/kushalktamang/"
            className="cursor text-sm group p-3 flex gap-2 items-center"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaLinkedinIn className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              LinkedIn
            </span>
          </a>
        </div>
        {/*------------------------x------------------------*/}
        <div>
          <a
            href="https://x.com/kushalktamang"
            className="cursor text-sm group p-3 flex gap-2 items-center"
            target="_blank"
          >
            <span className="transition-transform duration-200 group-hover:scale-110 flex items-center gap-1">
              <FaX className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              x.com
            </span>
          </a>
        </div>
        {/*-----------------github----------------*/}
        <div>
          <a
            href="https://github.com/kushalktamang"
            className="cursor text-sm group p-3 flex gap-2 items-center"
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

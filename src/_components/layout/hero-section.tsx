import Image from "next/image";
import SocialLinks from "../ui/social-links";

function HeroSection() {
  return (
    <section className="flex flex-col justify-start p-5 border-b border-border font-victor-mono">
      <div>
        <h1 className="font-geist-pixel text-3xl text-dark-cyan">
          Kushal Tamang.
        </h1>
        <p className="text-rose-pine">Software Engineer</p>
      </div>
      <div className="mt-5">
        <div className="flex text-xl">
          <a
            href="https://go.dev/"
            className="hover:text-dark-cyan flex items-center mr-2"
          >
            <Image
              src="/go.svg"
              alt="go"
              width={10}
              height={10}
              className="h-5 w-auto"
            />{" "}
            Go Programming Language
          </a>{" "}
          <span className="text-rose-pine">enthusiast.</span>
        </div>
        <p className="text-xl mt-1">Currently learning Effects.</p>
      </div>

      {/*------------------------ my social links -----------------------*/}
      <SocialLinks />
    </section>
  );
}

export default HeroSection;

import { ReactNode } from "react";
import Shell from "./shell";

interface IHeader {
  title: string;
  aside?: ReactNode;
  id?: string;
}

const Header = ({ title, aside, id }: IHeader) => {
  return (
    <div id={id} className="relative w-full border-y border-line bg-stripes">
      {/* 2px Crosshair Dot Anchors at Grid Intersections */}
      <span className="absolute top-0 left-0 h-0.75 w-0.75 -translate-x-1/2 -translate-y-1/2 bg-foreground opacity-40 z-20" />
      <span className="absolute top-0 right-0 h-0.75 w-0.75  translate-x-1/2 -translate-y-1/2 bg-foreground opacity-40 z-20" />
      <span className="absolute bottom-0 left-0 h-0.75 w-0.75  -translate-x-1/2 translate-y-1/2 bg-foreground opacity-40 z-20" />
      <span className="absolute bottom-0 right-0 h-0.75 w-0.75  translate-x-1/2 translate-y-1/2 bg-foreground opacity-40 z-20" />

      <Shell className="flex items-center justify-between gap-4 px-6 py-3 sm:px-8 bg-background">
        <h2 className="text-2xl tracking-wide text-dark-cyan font-instrument-serif">{title}</h2>
        {aside}
      </Shell>
    </div>
  );
};

export default Header;

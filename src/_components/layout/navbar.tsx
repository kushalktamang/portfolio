// import Header from "../ui/header";
import Shell from "../ui/shell";

const Navbar = () => {
  return (
    <>
      <div className="relative w-full border-y border-line">
        {/* 2px Crosshair Dot Anchors at Grid Intersections */}
        <span className="absolute top-0 left-0 h-0.75 w-0.75 -translate-x-1/2 -translate-y-1/2 bg-foreground opacity-40 z-20" />
        <span className="absolute top-0 right-0 h-0.75 w-0.75  translate-x-1/2 -translate-y-1/2 bg-foreground opacity-40 z-20" />
        <span className="absolute bottom-0 left-0 h-0.75 w-0.75  -translate-x-1/2 translate-y-1/2 bg-foreground opacity-40 z-20" />
        <span className="absolute bottom-0 right-0 h-0.75 w-0.75  translate-x-1/2 translate-y-1/2 bg-foreground opacity-40 z-20" />

        <Shell className="flex items-center justify-between gap-4 px-6 py-3 sm:px-8 bg-background">
          <h2 className="text-2xl tracking-wide text-dark-cyan font-geist-pixel">xy.</h2>
        </Shell>
      </div>
    </>
  );
};

export default Navbar;

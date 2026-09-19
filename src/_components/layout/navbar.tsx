import Clock from "../ui/clock";

function Navbar() {
  return (
    <nav className="text-center font-victor-mono p-5 border-b border-border flex justify-between text-sm">
      <h1 className=" text-white/60">
        ~/.kushal<strong className="text-rose-pine">k</strong>tamang
      </h1>
      <Clock />
    </nav>
  );
}

export default Navbar;

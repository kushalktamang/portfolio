import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center m-20 sm:m-24 sm:p-24 font-instrument-serif text-glitch bg-background">
      <div>
        <h1 className="text-3xl sm:text-9xl">404</h1>
        <p className="text-3xl sm:text-5xl">
          Uh oh, the page you’re looking for <br /> can’t be found
        </p>
      </div>
      <div className="mt-10">
        <Link href="/" className="border p-5 hover:bg-foreground hover:text-background font-bold">
          Go back home
        </Link>
      </div>
    </div>
  );
}

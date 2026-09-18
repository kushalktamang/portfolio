import Navbar from "@/_components/navbar";

export default function Home() {
  return (
    <main className="min-h-dvh flex overflow-y-auto justify-center ">
      <div className="max-w-2xl w-full sm:border-x border-[#222222] sm:mx-8 flex flex-col min-h-dvh">
        <Navbar />
      </div>
    </main>
  );
}

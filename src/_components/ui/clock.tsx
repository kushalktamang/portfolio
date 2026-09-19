"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/clock.svg"
        alt="clock"
        width={20}
        height={20}
        className="h-5 w-auto"
      />
      <span className="text-dark-cyan">Pokhara</span>
      <span className="text-coral-red">{time ?? "--:--"}</span>
    </div>
  );
}

export default Clock;

"use client";
import { z } from "zod";
import { useEffect, useState } from "react";
import Header from "../ui/header";
import Shell from "../ui/shell";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub } from "react-icons/bs";

const WEEKS = 53;
const DAYS = 7;

const contributionDaySchema = z.object({
  date: z.string(),
  count: z.number(),
  level: z.number(),
});

const apiResponseSchema = z.object({
  total: z.record(z.string(), z.union([z.number(), z.string()])),
  contributions: z.array(contributionDaySchema),
});

type ContributionDay = z.infer<typeof contributionDaySchema>;
type ApiResponse = z.infer<typeof apiResponseSchema>;

const username: string = "kushalktamang";
const contributionsLastYear = 500;

function level(week: number, day: number) {
  const seed = (week * 31 + day * 17 + 7) % 97;
  const wave = Math.sin(week / 6) * 1.5 + 2;
  const v = (seed % 5) * 0.4 + wave;
  return Math.max(0, Math.min(4, Math.round(v % 5)));
}

function formatDate(dateStr: string) {
  if (dateStr.startsWith("fallback")) {
    return "";
  }
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const SHADES = [
  "bg-neutral-800/40",
  "bg-emerald-900/60",
  "bg-emerald-700/80",
  "bg-emerald-500",
  "bg-emerald-400",
];

const GithubActivity = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { signal: controller.signal },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch contribution data");
        }
        return res.json();
      })
      .then((json: unknown) => {
        setData(apiResponseSchema.parse(json));
        setLoading(false);
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) {
          return;
        }
        console.error("Error fetching GitHub graph data:", error);
        setHasError(true);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (username === "") {
    return null;
  }
  const profile = `https://github.com/${username}`;

  const weeks: ContributionDay[][] = [];
  if (data !== null && data.contributions.length > 0) {
    for (let i = 0; i < data.contributions.length; i += 7) {
      weeks.push(data.contributions.slice(i, i + 7));
    }
  } else {
    for (let w = 0; w < WEEKS; w++) {
      const week: ContributionDay[] = [];
      for (let d = 0; d < DAYS; d++) {
        week.push({
          date: `fallback-${w}-${d}`,
          count: 0,
          level: level(w, d),
        });
      }
      weeks.push(week);
    }
  }

  const contributionsCount = (
    data === null
      ? contributionsLastYear
      : data.contributions.reduce((sum, d) => sum + d.count, 0)
  ).toLocaleString();

  return (
    <section>
      <Header id="github" title="Github Activity" aside="@kushalktamang" />

      <Shell>
        <div className="p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-200 transition-colors hover:text-white"
            >
              <BsGithub className="h-4 w-4" />@{username}
              <BsArrowRight className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <span className="font-mono text-xs text-neutral-400 flex items-center gap-2">
              {loading && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
              )}
              {hasError && (
                <span
                  className="h-2 w-2 rounded-full bg-amber-500/80 cursor-help"
                  title="Failed to load live data, showing demo data"
                />
              )}
              {contributionsCount} contributions in the last year
            </span>
          </div>

          <div
            className={`overflow-x-auto pb-1 transition-opacity duration-300 ${loading ? "opacity-60" : "opacity-100"}`}
          >
            <div className="flex gap-0.75">
              {weeks.map((week, w) => (
                <div key={w} className="flex flex-col gap-0.75">
                  {week.map((day, d) => (
                    <motion.span
                      key={day.date}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (w * DAYS + d) * 0.001,
                        duration: 0.15,
                      }}
                      className={`h-2.75 w-2.75 flex-none rounded-xs transition-colors duration-300 ${SHADES[day.level]}`}
                      title={
                        day.date.startsWith("fallback")
                          ? loading
                            ? "Loading..."
                            : "Demo data"
                          : `${day.count === 0 ? "No" : day.count} contribution${
                              day.count === 1 ? "" : "s"
                            } on ${formatDate(day.date)}`
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-neutral-500">
            Less
            {SHADES.map((s, i) => (
              <span key={i} className={`h-2.5 w-2.25 rounded-xs ${s}`} />
            ))}
            More
          </div>
        </div>
      </Shell>
    </section>
  );
};

export default GithubActivity;
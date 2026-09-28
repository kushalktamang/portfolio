"use client";
import { z } from "zod";
import { useEffect, useState } from "react";
import Header from "../ui/header";
import Shell from "../ui/shell";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

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
      {
        signal: controller.signal,
      },
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
      <Header id="github" title="Github Activity" />

      <Shell>
        <div className="p-6 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white font-arimo text-soft"
            >
              <BsGithub className="h-4 w-4" />@{username}
            </a>
            <span className="flex items-center gap-2 text-right font-mono text-[10px] text-neutral-400 sm:text-xs">
              {loading && (
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              )}

              {hasError && (
                <span
                  className="h-2 w-2 shrink-0 cursor-help rounded-full bg-amber-500/80"
                  title="Failed to load live data, showing demo data"
                />
              )}

              <span className="whitespace-nowrap text-soft">
                {contributionsCount} contributions
                <span className="hidden sm:inline"> in the last year</span>
              </span>
            </span>
          </div>

          <div
            className={`w-full pb-1 transition-opacity duration-300 ${loading ? "opacity-60" : "opacity-100"}`}
          >
            <div className="grid w-full grid-cols-53 gap-0.75">
              {weeks.map((week, w) => (
                <div key={w} className="grid min-w-0 grid-rows-7 gap-0.75">
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
                      className={`aspect-square w-full min-w-0 rounded-xs transition-colors duration-300 ${SHADES[day.level]}`}
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

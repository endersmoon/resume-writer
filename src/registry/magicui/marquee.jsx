import { cn } from "@/utils/cn";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--gap:1rem] [gap:var(--gap)]",
        className
      )}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            "animate-marquee",
            reverse && "animate-marquee-reverse",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

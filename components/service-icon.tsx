import type { Service } from "@/lib/site-config";

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: Service["icon"]; className?: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "leaf":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 19c0-9 7-14 16-14-1 9-6 15-14 15-2 0-3-.4-3-1Z" />
          <path d="M5 19 14 9" />
        </svg>
      );
    case "flower":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="2.4" />
          <path d="M12 4c2 0 3 1.6 3 3.5S13.5 11 12 11 9 9.4 9 7.5 10 4 12 4Z" />
          <path d="M12 20c-2 0-3-1.6-3-3.5S10.5 13 12 13s3 1.6 3 3.5S14 20 12 20Z" />
          <path d="M4 12c0-2 1.6-3 3.5-3S11 10.5 11 12s-1.6 3-3.5 3S4 14 4 12Z" />
          <path d="M20 12c0 2-1.6 3-3.5 3S13 13.5 13 12s1.6-3 3.5-3S20 10 20 12Z" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 5c1.5 2 2.4 4 2.4 6 0 2-1 4-2.4 5-1.4-1-2.4-3-2.4-5 0-2 .9-4 2.4-6Z" />
          <path d="M5 12c2-1 4.2-1.2 6-.6 0 2-1 4-2.4 5C7 16 5.4 14 5 12Z" />
          <path d="M19 12c-2-1-4.2-1.2-6-.6 0 2 1 4 2.4 5 1.6-.4 3.2-2.4 3.6-4.4Z" />
          <path d="M3 17c5 2 13 2 18 0" />
        </svg>
      );
    case "spiral":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 12a3 3 0 1 1-3-3 5 5 0 0 1 5 5 7 7 0 0 1-7 7 9 9 0 0 1-9-9" transform="translate(2 -2)" />
        </svg>
      );
    case "hand":
      return (
        <svg {...common} aria-hidden>
          <path d="M9 11V5.5a1.5 1.5 0 1 1 3 0V11" />
          <path d="M12 11V4.5a1.5 1.5 0 1 1 3 0V11" />
          <path d="M15 11V6a1.5 1.5 0 1 1 3 0v8a6 6 0 0 1-6 6h-1c-3 0-5-2-6-4l-2-4a1.5 1.5 0 0 1 2.6-1.4L7 12" />
          <path d="M9 11V8.5a1.5 1.5 0 0 0-3 0V14" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
          <path d="M3 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
        </svg>
      );
    case "balance":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 4v16" />
          <path d="M5 8h14" />
          <path d="M5 8 2 14h6L5 8Z" />
          <path d="M19 8l-3 6h6l-3-6Z" />
          <path d="M9 20h6" />
        </svg>
      );
    default:
      return null;
  }
}

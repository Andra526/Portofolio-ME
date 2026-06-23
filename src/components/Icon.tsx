interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const paths: Record<string, string> = {
  code: "M9 18l-6-6 6-6M15 6l6 6-6 6",
  database:
    "M12 3c4.97 0 9 1.34 9 3s-4.03 3-9 3-9-1.34-9-3 4.03-3 9-3zM3 6v12c0 1.66 4.03 3 9 3s9-1.34 9-3V6M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  "stack-2": "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  "layout-grid": "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  server:
    "M3 5h18v5H3zM3 14h18v5H3zM7 7.5h.01M7 16.5h.01",
  tools:
    "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  mail: "M4 4h16v16H4zM4 6l8 7 8-7",
  github:
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C7.5 4.3 6.4 4.6 6.4 4.6a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 005 11c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V19",
  "arrow-up-right": "M7 17L17 7M7 7h10v10",
  award:
    "M12 15a6 6 0 100-12 6 6 0 000 12zM8.5 14L7 21l5-2.5L17 21l-1.5-7",
  "external-link": "M14 3h7v7M21 3l-9 9M21 14v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6",
};

export default function Icon({ name, size = 18, className = "" }: IconProps) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

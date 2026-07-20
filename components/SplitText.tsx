import type { CSSProperties } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  hoverColor?: string;
}

export default function SplitText({ text, className = "", hoverColor }: SplitTextProps) {
  return (
    <span className={`split-text cursor-hover-target ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="split-letter"
          style={hoverColor ? ({ "--hover-color": hoverColor } as CSSProperties) : undefined}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
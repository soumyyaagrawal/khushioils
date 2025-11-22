"use client";

export default function GlassDiv({
  children,
  bottom = "bottom-32",
  right = "right-20",
}) {
  return (
    <div
      className={`
        flex items-center justify-center
        absolute
        text-white rounded-2xl
        z-10
        scale-150
        translate-x-1/4
        translate-y-1/4
        ${bottom} ${right}
      `}
      style={{
        padding: "4px",
        height: "26px",
        width: "auto",
        backdropFilter: "blur(48px)",
        WebkitBackdropFilter: "blur(48px)",
        background: "rgba(60, 75, 50, 0.35)",
        border: "0.5px solid rgba(255, 255, 255, 0.28)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </div>
  );
}

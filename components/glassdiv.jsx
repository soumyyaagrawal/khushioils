"use client";

export default function GlassDiv({
  text = "AgriTech",
  width = "120px",
}) {
  return (
    <div
      className="px-4 py-2 flex items-center justify-center rounded-full text-white font-medium"
      style={{
        width: width,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(10px)",
        background: "rgba(255, 255, 255, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      {text}
    </div>
  );
}

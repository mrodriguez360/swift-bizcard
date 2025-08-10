export default function InteractiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      {/* Solid black base using design token */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "hsl(var(--ai-bg))",
        }}
      />

      {/* Repeating grid image overlay (AI Studio style) */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "url(/lovable-uploads/69a6d39b-bf7c-4340-9bae-9640937e7e8b.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          backgroundSize: "auto",
        }}
      />
    </div>
  );
}

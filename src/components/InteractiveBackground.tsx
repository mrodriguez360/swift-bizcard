export default function InteractiveBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
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
            "url(/lovable-uploads/c8b47b18-9377-4631-980a-a74981031dab.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          backgroundSize: "auto",
        }}
      />
    </div>
  );
}

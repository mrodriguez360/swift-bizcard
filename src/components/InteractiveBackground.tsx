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

      {/* Repeating grid image overlay with stronger fade to bottom-right */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "url(/lovable-uploads/69a6d39b-bf7c-4340-9bae-9640937e7e8b.png)",
          backgroundRepeat: "repeat",
          backgroundPosition: "top left",
          backgroundSize: "auto",
          WebkitMaskImage:
            "linear-gradient(to bottom right, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,0.2) 48%, rgba(0,0,0,0) 62%)",
          maskImage:
            "linear-gradient(to bottom right, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 28%, rgba(0,0,0,0.2) 48%, rgba(0,0,0,0) 62%)",
        }}
      />
    </div>
  );
}

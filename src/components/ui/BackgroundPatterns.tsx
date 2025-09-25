export default function BackgroundPatterns() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Top-right blob */}
      <div
        className="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Bottom-left blob */}
      <div
        className="absolute -left-[10%] -bottom-[10%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}

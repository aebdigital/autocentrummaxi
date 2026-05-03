"use client";

export default function GoToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="transition-colors hover:text-lime-400"
    >
      Go to Top ↑
    </button>
  );
}

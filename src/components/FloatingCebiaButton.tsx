export default function FloatingCebiaButton() {
  return (
    <a
      href="https://cz.cebia.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-montserrat text-sm font-semibold text-dark-900 shadow-lg transition-all hover:scale-105 hover:bg-lime-500"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Prověřte si vozidlo
    </a>
  );
}

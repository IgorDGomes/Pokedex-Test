export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center py-4">
      <span>© {currentYear} Igor Gomes</span>
    </footer>
  );
}

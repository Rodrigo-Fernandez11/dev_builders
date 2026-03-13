const links = [
  { href: "#services", label: "Servicios" },
  { href: "#process", label: "Proceso" },
  { href: "#cases", label: "Proyectos" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contact", label: "Asesoria gratis" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-amber-100 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="reveal text-lg font-semibold tracking-tight text-zinc-900">
          Dev Builders
        </a>
        <ul className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition duration-300 hover:text-teal-700">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

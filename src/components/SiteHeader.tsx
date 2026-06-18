import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;
  const tone = transparent ? "light" : "dark";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: transparent ? "transparent" : "rgba(248,243,233,0.96)",
        backdropFilter: transparent ? "none" : "blur(8px)",
        borderBottom: transparent ? "1px solid transparent" : "1px solid var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo tone={tone} />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.72rem] tracking-[0.28em] uppercase font-medium transition-colors"
              style={{ color: tone === "light" ? "#f5efe3" : "#2b1f15" }}
              activeProps={{ style: { color: "#b8915a" } }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/reservations" className="btn-primary">Reserve a Table</Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ color: tone === "light" ? "#f5efe3" : "#2b1f15" }}
        >
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col">
          <div className="flex justify-between items-center px-6 py-5 border-b border-border">
            <Logo tone="dark" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-espresso">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-7 flex-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-espresso"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/reservations" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Reserve a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

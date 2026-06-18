import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border" style={{ background: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <Logo tone="dark" />
          </div>

          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <address className="not-italic text-sm text-cocoa leading-loose">
              14 Mayfair Square<br />
              London W1J 8AB<br />
              <a href="tel:+442071234567" className="hover:text-gold transition-colors">020 7123 4567</a><br />
              <a href="mailto:reservations@maisonargente.com" className="hover:text-gold transition-colors">
                reservations@maisonargente.com
              </a>
            </address>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Opening Hours</h4>
            <ul className="text-sm text-cocoa leading-loose">
              <li>Mon – Thu &nbsp;·&nbsp; 5:30pm – 11:00pm</li>
              <li>Fri – Sat &nbsp;·&nbsp; 12:00pm – 11:30pm</li>
              <li>Sunday &nbsp;·&nbsp; 12:00pm – 9:30pm</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Visit</h4>
            <ul className="text-sm text-cocoa leading-loose space-y-1">
              <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
              <li><Link to="/reservations" className="hover:text-gold transition-colors">Reservations</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5">Follow</h4>
            <ul className="text-sm text-cocoa leading-loose space-y-1">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Tripadvisor</a></li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              Subscribe to hear about new menus, seasonal events and chef's table evenings.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} Maison Argenté. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
          <p className="text-[0.62rem] tracking-[0.18em] normal-case opacity-70">
            Website crafted by Sitevora
          </p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import reservationImg from "@/assets/reservation.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Maison Argenté" },
      { name: "description", content: "Reserve a table at Maison Argenté, Mayfair. Released eight weeks in advance." },
      { property: "og:title", content: "Reservations — Maison Argenté" },
      { property: "og:description", content: "Secure your table. Savour the moment." },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: Reservations,
});

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <article>
      <section className="pt-40 pb-12 lg:pt-52 lg:pb-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Reservations</p>
          <h1 className="font-display text-5xl lg:text-7xl mt-6 leading-[1.05]">
            Secure your table.<br />
            <span className="italic-serif">Savour the moment.</span>
          </h1>
          <p className="mt-8 text-cocoa max-w-xl mx-auto leading-relaxed">
            We accept reservations up to eight weeks ahead. For parties of seven or more, please
            email <a href="mailto:reservations@maisonargente.com" className="text-gold">reservations@maisonargente.com</a>.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 bg-ivory">
        <div className="relative min-h-[420px] lg:min-h-[760px]">
          <img src={reservationImg} alt="Reserved table" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          {submitted ? (
            <div className="max-w-md">
              <p className="eyebrow">Confirmed</p>
              <h2 className="font-display text-4xl mt-5">Thank you.</h2>
              <p className="mt-6 text-cocoa leading-relaxed">
                Your request has been received. A member of our team will confirm your booking
                shortly by email. We look forward to welcoming you.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-outline-dark mt-10">
                Make another booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="max-w-md space-y-6"
            >
              <div>
                <p className="eyebrow">Book a Table</p>
                <h2 className="font-display text-3xl lg:text-4xl mt-4">Your details</h2>
              </div>

              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />

              <div className="grid grid-cols-2 gap-4">
                <Field label="Guests" name="guests" type="number" min={1} max={6} defaultValue={2} required />
                <SelectField label="Time" name="time" options={[
                  "12:00", "12:30", "13:00", "13:30", "18:00", "18:30",
                  "19:00", "19:30", "20:00", "20:30", "21:00",
                ]} />
              </div>

              <Field label="Date" name="date" type="date" required />

              <div>
                <label className="eyebrow block mb-2">Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cocoa transition-colors resize-none"
                  placeholder="Dietary requirements, occasion, seating preference…"
                />
              </div>

              <button type="submit" className="btn-primary w-full">Request Reservation</button>
              <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                Reservations are confirmed by our team within two hours during opening hours.
                A credit card is held against the booking but never charged unless a cancellation
                policy applies.
              </p>
            </form>
          )}
        </div>
      </section>
    </article>
  );
}

function Field({ label, name, ...rest }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        {...rest}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cocoa transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue="19:30"
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cocoa transition-colors"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

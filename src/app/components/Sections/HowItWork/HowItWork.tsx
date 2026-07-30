
const steps = [
  {
    title: 'Wybierz plan',
    desc: 'Przejrzyj dostępne pakiety i wybierz ten, który najlepiej odpowiada Twoim potrzebom.'
  },
  {
    title: 'Skonfiguruj usługę',
    desc: 'Dodaj domenę, ustawienia konta i preferencje — wszystko w kilku prostych krokach.'
  },
  {
    title: 'Opłać zamówienie',
    desc: 'Bezpieczna płatność online. Aktywacja następuje natychmiast po potwierdzeniu.'
  },
  {
    title: 'Zarządzaj i rozwijaj',
    desc: 'Korzystaj z panelu klienta, monitoruj statystyki i rozwijaj swoją stronę.'
  }
];

export default function HowItWork() {
  return (
    <section  className="px-4 py-8 sm:px-6 lg:px-8">
      <h2  className="mb-4 text-center text-fluid-h2 font-semibold ">
        Jak to działa?
      </h2>
      <p className="mb-8 text-center text-fluid-small text-text-muted">
        Od wejścia na stronę do działającego serwera w kilku prostych krokach.
      </p>

        <div className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:max-w-5xl md:mx-auto md:items-start">
        {steps.map((s, i) => (
          <article key={i} className="rounded-lg ring ring-border bg-surface p-4 shadow-sm h-32 ">
            <div className="mb-2 flex items-center">
              <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full  font-semibold bg-cta/50 text-cta-text">
                {i + 1}
              </div>
              <h3 className=" font-semibold">{s.title}</h3>
            </div>
            <p className="text-fluid-small leading-6 text-text-muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

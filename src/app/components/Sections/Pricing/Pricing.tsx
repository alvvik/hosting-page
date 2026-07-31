import ButtonCustom from "../../ButtonCustom";

interface OfferProp {
  id: number;
  name: string;
  description: string;
  isPopular?: boolean;
  price: number;
  cpu: number;
  ram: number;
  disk: number;
}

const offers: OfferProp[] = [
  {
    id: 1,
    name: "Wood",
    description: "Idealny dla małych serwerów survival z przyjaciółmi",
    price: 19.99,
    cpu: 2,
    ram: 4,
    disk: 10,
  },
  {
    id: 2,
    name: "Stone",
    description: "Świetny dla większych serwerów i modpacków z przyjaciółmi",
    isPopular: true,
    price: 29.99,
    cpu: 3,
    ram: 6,
    disk: 20,
  },
  {
    id: 3,
    name: "Obsidian",
    description:
      "Doskonały dla bardzo dużych modpacków jak ATM10 lub Better Minecraft",
    price: 47.99,
    cpu: 4,
    ram: 9,
    disk: 35,
  },
  {
    id: 4,
    name: "Diamond",
    description: "Polecany dla dużych publicznych serwerów z pluginami",
    price: 59.99,
    cpu: 5,
    ram: 11,
    disk: 45,
  },
  {
    id: 5,
    name: "Emerald",
    description: "Dla bardzo wymagających dużych serwerów z wieloma graczami",
    price: 85.99,
    cpu: 6.5,
    ram: 14,
    disk: 65,
  },
  {
    id: 6,
    name: "Netherite",
    description: "Najwydajniejszy dla najbardziej wymagających serwerów",
    price: 99.99,
    cpu: 7,
    ram: 16,
    disk: 80,
  },
];
export default function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 px-0 py-8 ">
      <h2 className="text-fluid-h2 font-semibold">Nasza oferta</h2>
      <p className="text-fluid-small text-text-muted text-center">
        Wybierz plan, który najlepiej odpowiada Twoim potrzebom i ciesz się
        pełną kontrolą nad swoim serwerem.
      </p>
      <div className="grid gap-4 p-4 md:grid-cols-3 md:gap-6 md:max-w-5xl md:mx-auto md:items-start">
        {offers.map((offer) => (
          <div key={offer.id} className="relative flex flex-col">
            {offer.isPopular && (
              <p className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 text-center px-4 py-2 rounded-full bg-cta   text-fluid-small font-bold uppercase text-cta-text">
                Często wybierane
              </p>
            )}
            <div
              className={`bg-surface flex flex-col gap-2 p-4 rounded-2xl shadow ${offer.isPopular ? "ring-2 ring-cta" : ""}`}
            >
              <p className="font-bold text-fluid-lead">{offer.name}</p>
              <p className="text-fluid-small text-text-muted">
                {offer.description}
              </p>
              <p>
                <span className="font-bold text-fluid-h2">
                  {offer.price.toFixed(2)}zł
                </span>{" "}
                <br /> za miesiąc
              </p>
              <div>
                <div className="flex justify-between">
                  <p>CPU:</p>
                  <p>{offer.cpu}</p>
                </div>
                <div className="flex justify-between">
                  <p>RAM:</p>
                  <p>{offer.ram} GB</p>
                </div>
                <div className="flex justify-between">
                  <p>Dysk:</p>
                  <p>{offer.disk} GB</p>
                </div>
              </div>
              <ButtonCustom>Wybierz plan</ButtonCustom>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

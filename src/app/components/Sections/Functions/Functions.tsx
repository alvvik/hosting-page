import {
  Clock,
  Sliders,
  Globe,
  Headphones,
  Flame,
  CreditCard,
} from "lucide-react";
import { ReactNode } from "react";

interface ItemProp {
  icon: ReactNode;
  title: string;
  desc: string;
}
const items: ItemProp[] = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Dostępność 99.9% Uptime",
    desc: "Infrastruktura w nowoczesnym centrum danych zapewnia stabilność i ciągłe działanie Twojego serwera bez niespodziewanych przerw.",
  },
  {
    icon: <Sliders className="w-6 h-6 text-primary" />,
    title: "Prosty w obsłudze panel",
    desc: "Zarządzaj plikami, konsolą i graczymi z poziomu przejrzystego panelu po polsku, dostępnego także na telefonie.",
  },
  {
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: "Niskie pingi w Polsce i UE",
    desc: "Lokalizacja serwerów w sercu Europy gwarantuje najniższe opóźnienia i idealną płynność rozgrywki dla graczy z Polski.",
  },

  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Elastyczne płatności",
    desc: "Płać wygodnie tak, jak lubisz – BLIK, karta, przelew szybki lub SMS. Bez ukrytych opłat i subskrypcji na siłę.",
  },
];
export default function Functions() {
  return (
    <section className="grid gap-4 p-4 md:grid-cols-2 md:gap-6 md:max-w-5xl md:mx-auto md:items-start">
      {items.map((item) => {
        return (
          <div
            key={items.indexOf(item)}
            className="flex items-start gap-4 rounded-2xl p-4 md:p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cta/50 text-cta-text">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ArrowBigDown } from "lucide-react";
interface FaqProps {
  question: string;
  answer: string;
}

const faqData: FaqProps[] = [
  {
    question: "Czy mogę przetestować serwer bez ryzyka?",
    answer:
      "Tak. Oferujemy gwarancję pełnego zwrotu pieniędzy w ciągu 24 godzin od zakupu (z wyłączeniem płatności PaySafeCard). Jeśli coś będzie nie tak, po prostu napisz do nas.",
  },
  {
    question: "Czy muszę znać się na serwerach, żeby zacząć?",
    answer:
      "Nie. Panel jest zaprojektowany tak, aby pierwsze uruchomienie serwera było możliwe w kilka chwil, nawet jeśli nigdy wcześniej tego nie robiłeś. W razie problemów możesz liczyć na pomoc na Discordzie.",
  },
  {
    question: "Czy mogę instalować mody i pluginy?",
    answer:
      "Tak. Nie narzucamy limitu na liczbę pluginów i wspieramy serwery z modami. Możesz skorzystać z automatycznego instalatora modpacków lub wgrać własne pliki.",
  },
  {
    question: "Jak mogę się z Wami skontaktować?",
    answer:
      "Najłatwiej przez nasz serwer Discord – link znajdziesz w kilku miejscach na stronie oraz w panelu. Tam najszybciej uzyskasz pomoc i odpowiedzi na pytania.",
  },
];
export default function Faq() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center">
      <div>
        <h2 className="text-fluid-h2 font-bold">Często zadawane pytania</h2>
        <p className="text-fluid-small text-text-muted text-center">
          Masz inne pytanie? Napisz do nas na Discordzie.
        </p>
      </div>
      {faqData.map((faq, index) => (
        <Disclosure
          key={index}
          as="div"
          className="bg-surface flex flex-col gap-2 p-2 rounded-2xl w-2/3 lg:w-1/3"
        >
          <DisclosureButton className="group flex items-center justify-between p-2 gap-16 font-semibold">
            <p className="text-left">{faq.question}</p>
            <ArrowBigDown className="w-5 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="p-2">{faq.answer}</DisclosurePanel>
        </Disclosure>
      ))}
    </section>
  );
}

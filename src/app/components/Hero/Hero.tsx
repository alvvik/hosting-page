import Link from "next/link";
import ButtonCustom from "../ButtonCustom";
import ChangingText from "../ChangingText";

const texts: string[] = ["szybko", "bezpiecznie", "bez problemów", "tanio"];
const list = [
  { id: 0, text: "Ponad 1000 zadowolonych klientow" },
  {
    id: 1,
    text: (
      <>
        Gwarancja pelnego wzrotu pieniedzy w ciagu 24 godzin od zakupu <br />
        <span className="text-fluid-small text-text-muted">
          (Nie dotyczy zamówień opłaconych za pomocą PaySafeCard.
          <Link className="underline" href={"/regulamin"}>
            Regulamin
          </Link>
          )
        </span>
      </>
    ),
  },
];
export default function Hero() {
  return (
    <section className="flex justify-center items-center  gap-4 flex-col ">
      <h1 className="text-fluid-h1 md:text-4xl lg:text-5xl xl:text-6xl text-center font-bold">
        Stworz serwer minecraft{" "}
        <span className="block ">
          <ChangingText texts={texts} />
        </span>
      </h1>
      <span className="bg-cta/90 backdrop-blur-3xl text-center text-cta-text p-1 rounded-2xl  shadow-lg shadow-cta text-fluid-hero font-bold">
        w mniej niz minute!
      </span>
      <div className=" my-8 flex gap-4 flex-col md:flex-row">
        <ButtonCustom>
          <Link href={"panel.example.com"}>Stwórz swój serwer</Link>
        </ButtonCustom>
        <ButtonCustom className=" bg-surface text-cta  ring ring-cta border-b-2 border-cta  hover:bg-cta/60 hover:shadow-cta hover:text-cta-text">
          <a href={"/#pricing"}>Zobacz cennik</a>
        </ButtonCustom>
      </div>
      <div>
        <ul className="text-center">
          {list.map((item) => {
            return (
              <li className="list-disc list-inside font-semibold" key={item.id}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

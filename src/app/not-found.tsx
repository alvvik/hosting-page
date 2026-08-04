"use client";

import { useRouter } from "next/navigation";
import ButtonCustom from "./components/ButtonCustom";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-fluid-h1 font-bold">404 - Strona nie znaleziona</h1>
      <p className="text-fluid-hero">Strona, której szukasz, nie istnieje.</p>
      <ButtonCustom onClick={() => router.back()}>
        Wróć do poprzedniej strony
      </ButtonCustom>
    </div>
  );
}
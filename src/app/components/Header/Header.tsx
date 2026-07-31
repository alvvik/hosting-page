"use client";
import Link from "next/link";
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo.svg";
const links = [
  { label: "Funkcje", href: "#functions" },
  { label: "Jak to działa", href: "#jaktodziala" },

  { label: "Cennik", href: "#pricing" },
  { label: "Zaloguj się", href: "login" },
];

export default function Header() {
  return (
    <HeadlessMenu as="header" className="relative bg-surface ">
      {({ open }) => (
        <div className="mx-auto flex max-w-7xl items-center p-4 justify-between ">
          <Link
            href="/"
            className="flex items-center gap-4 text-lg font-bold tracking-wide no-underline"
          >
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl p-0.5"
              aria-hidden="true"
            >
              <Logo className="w-10 h-10 text-text" />
            </span>
            <span>BlockVerse</span>
          </Link>

          <MenuButton className="inline-flex items-center justify-center rounded-xl p-2 transition-all duration-300 ease-out focus:outline-none focus:ring-2 md:hidden">
            <span className="sr-only">Otwórz menu</span>
            <span className="relative h-6 w-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
                }`}
                aria-hidden="true"
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-out ${
                  open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
                }`}
                aria-hidden="true"
              />
            </span>
          </MenuButton>

          <MenuItems className="absolute left-0 top-full z-50 w-full px-4 py-4 outline-none data-closed:hidden md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 shadow-lg rounded-b-2xl px-4">
            <nav>
              <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 bg-surface">
                {links.map((link) => (
                  <li key={link.href}>
                    <MenuItem>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2  transition-all  ring ring-cta font-semibold text-cta text-center"
                      >
                        {link.label}
                      </Link>
                    </MenuItem>
                  </li>
                ))}
                <li className="block rounded-lg px-3 py-2  transition-all   font-semibold bg-cta text-cta-text text-center">
                  <Link href="/register">Zarejestruj się</Link>
                </li>
              </ul>
            </nav>
          </MenuItems>
        </div>
      )}
    </HeadlessMenu>
  );
}

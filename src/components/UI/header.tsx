"use client";

import Sloth from "../3D/sloth";
import Logo from "../3D/logo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { font_link } from "@/lib/fonts";
import { CiMenuKebab } from "react-icons/ci";
import { SiTelegram } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { IconType } from "react-icons";

type LinkType = {
  label?: string;
  href: string;
  target: "_blank" | "_self";
  iconPath?: string;
  iconSize?: number;
  reactIcon?: IconType;
  reactIconSize?: number;
};

const contacts: LinkType[] = [
  {
    label: "+7(965)567-60-81",
    href: "tel:+79655676081",
    target: "_blank",
  },
  {
    href: "mailto:ryazanov_suspense@mail.ru",
    target: "_blank",
    reactIcon: MdEmail,
  },
  {
    href: "https://max.ru/u/f9LHodD0cOJ8KTITkanSMSYEdwz3Ohd6mE02afwq1wzm5b9296Q8_TyFqCQ",
    target: "_blank",
    iconPath: "/icons/max.svg",
  },
  {
    href: "https://t.me/studio_lenivec",
    target: "_blank",
    reactIcon: SiTelegram,
  },
];

export default function Header() {
  const [animLink, setAnimLink] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimLink((prev) => (prev === contacts.length - 1 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed py-8 z-100 flex top-5 left-5 rounded-full w-47 lg:w-70 border 
      bg-secondary border-accent-dark`}
      >
        <Sloth />
        <Logo />
      </div>

      <div className="fixed right-5 top-5 z-100 rounded-full py-1 px-2 bg-secondary border-accent-dark">
        <div className="hidden lg:flex gap-2 items-center">
          {contacts.map((item, i) => {
            const Icon = item.reactIcon;
            return (
              <Link
                key={i}
                href={item.href}
                target={item.target}
                className={`${font_link.className} text-sm
              ${animLink === i ? "-translate-y-1" : "translate-y-0"} 
              duration-1000 ease-in-out hover:opacity-80 bg-accent-dark rounded-full px-2 flex items-center h-7`}
              >
                {item.label && item.label}
                {item.iconPath && (
                  <img
                    src={item.iconPath}
                    alt={item.iconPath}
                    width={item.iconSize ? item.iconSize : 13}
                    height={item.iconSize ? item.iconSize : 13}
                  />
                )}
                {item.reactIcon && Icon && (
                  <Icon size={item.reactIconSize ? item.reactIconSize : 13} />
                )}
              </Link>
            );
          })}
        </div>
        <div className="lg:hidden text-primary">
          <CiMenuKebab size={30} />
        </div>
      </div>
    </>
  );
}

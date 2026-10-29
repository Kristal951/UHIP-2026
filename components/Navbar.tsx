"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CTA from './ui/CTA'

const NavLinks = [
  {
    label: 'Home',
    href: "/home"
  },
  {
    label: 'Experiences',
    href: "/experiences"
  },
  {
    label: 'Register',
    href: "/register"
  },
  {
    label: 'Contact',
    href: "/contact"
  },
]

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const pastTop = new Set<EventTarget>();

    const update = (target: EventTarget, y: number) => {
      if (y > 10) pastTop.add(target);
      else pastTop.delete(target);
      setScrolled(pastTop.size > 0);
    };

    const onScroll = (e: Event) => {
      const target = e.target;
      if (!target) return;
      if (target === document) {
        update(document, document.scrollingElement?.scrollTop ?? window.scrollY);
      } else if (target instanceof HTMLElement) {
        update(target, target.scrollTop);
      }
    };

    update(document, document.scrollingElement?.scrollTop ?? window.scrollY);

    window.addEventListener("scroll", onScroll, { capture: true, passive: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  return (
    <div
      className={`w-full h-17.5 fixed top-0 left-0 right-0 px-6 py-2 flex justify-between z-100 transition-colors duration-300 ${scrolled ? "bg-background" : "bg-transparent"
        }`}
    >
      <div className='flex flex-1 gap-2 items-center'>
        <div className='w-10 h-10 rounded-lg flex items-center justify-center text-[22px] bg-brown-900 text-gold-600 font-bold '>
          U
        </div>
        <p
          className={`text-[20px] font-semibold font-sans transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"
            }`}
        >
          UHIP 2026
        </p>
      </div>

      <div className='flex flex-1 items-center gap-12 justify-center'>
        {NavLinks.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);

          const style = scrolled
            ? isActive
              ? "text-brown-600 font-bold"
              : "text-brown-900 hover:text-brown-600 font-semibold"
            : isActive
              ? "text-white font-bold"
              : "text-white/80 hover:text-white font-semibold";

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${style} font-sans text-base transition-colors duration-300`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      <div className='flex-1 flex justify-end items-center'>
        <CTA btnText='Buy Ticket' />
      </div>
    </div>
  )
}

export default Navbar
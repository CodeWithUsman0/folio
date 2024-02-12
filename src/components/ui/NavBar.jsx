import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >

<path d="M135.635 172s-3.54-19.069-10.433-33.824c0 0-3.685.51-6.448 6.785 0 0 4.89 9.717 5.892 27.039" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

<path d="m82.947 141.442 17.286 18.563 25.427-23.138-8.398-9.746s-11.05 9.373-29.423 8.374zM90.539 172s1.466-19.128-2.094-24.417" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

<path d="M118.766 125.752s6.19-10.185 0-48.303c0 0-13.347-10.485-67.276-5.145v35.317s1.033 27.99 18.567 27.99H87.89" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

<path d="M122.889 121.11s18.651 6.546 24.288-29.677c0 0 1.3-8.92-10.72-7.138 0 0-7.136 6.387-14.786 21.27m20.405-22.302s6.262-20.166-21.006-44.83l4.308-12.984-32.895 3.723L80.916 20l-7.647 16.173-14.254-12.74-9.735 23.935-14.647-3.38 16.53 29.52m9.419 6.866h7.287m24.492 0h3.62" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

<circle cx="68.956" cy="95.401" r="8.878" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

<path d="m71.909 97.272.783.659m32.208-1.287 2.087 1.853M61.67 113.01l28.892 3.21s-7.86 8.853-17.104 7.98c-9.243-.871-11.788-11.19-11.788-11.19z" style="fill:#000000;fill-opacity:0;stroke:#000000;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:6;paint-order:stroke fill markers"/>

        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}

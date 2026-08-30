'use client';

import { useEffect, useState } from 'react';
import { links } from '@/lib/links';
import NavCard from './tabs/card/NavCard';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const getSectionId = (href: string) => href.replace('#', '');

    const updateActiveSection = () => {
      const sections = links
        .map(({ href }) => {
          const id = getSectionId(href);
          const element = document.getElementById(id);

          return {
            id,
            element,
          };
        })
        .filter(
          (
            section
          ): section is {
            id: string;
            element: HTMLElement;
          } => section.element !== null
        );

      /*
       * The navbar is fixed, so we don't want to consider a section
       * active until its top has reached the area underneath the navbar.
       */
      const activationPoint = window.scrollY + 100;

      /*
       * Find the last section whose top is above our activation point.
       */
      let currentSection = sections[0]?.id ?? 'home';

      for (const section of sections) {
        if (section.element.offsetTop <= activationPoint) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    /*
     * Run once when the component mounts.
     */
    updateActiveSection();

    /*
     * Update whenever the user scrolls.
     */
    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });

    /*
     * Recalculate if the browser window changes size.
     *
     * This is useful because section positions can change when
     * the viewport size changes.
     */
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);


  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <ul className="flex justify-center gap-8 py-4">
        {links.map(({ href, label }) => {
          const id = href.replace('#', '');
          const isActive = activeSection === id;

          return (
            <NavCard key={id} label={label}/>
          );
        })}
      </ul>
    </nav>
  );
}
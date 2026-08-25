import Skills from "@/components/navbar/sections/Skills";
import Contacts from "@/components/navbar/sections/Contacts";
import Hero from "@/components/navbar/sections/Hero";
import Projects from "@/components/navbar/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </>
  );
}

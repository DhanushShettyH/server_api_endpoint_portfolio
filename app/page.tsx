'use client';
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
 
export default function Home() {
  // isclient is used because to avoid hydration error: page rendered in server side is different in client side (ex: div inside a) so we not rendering pages in server side use effect only run in client side than we mention client true than only in client side we render this component
  // const [isClient, setisClient] = useState(false)
  // useEffect(() => {
  //   setisClient(true)
  // }, [])
  
  return (
    <>
      {/* components are snapable  */}
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ffb64a]/80">
        {/*Header  */}
        
        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact us */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center px-4">
              <img
                className="h-10 w-10 rounded-full filter grayscale-0 hover:grayscale cursor-pointer"
                src="/general_white.gif" 
                alt=""
              />
            </div>
          </footer>
        </Link>
      </div>
    </>
  );
}

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
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchPageInfo } from "@/utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];

}


const Home = async () => {
  // isclient is used because to avoid hydration error: page rendered in server side is different in client side (ex: div inside a) so we not rendering pages in server side use effect only run in client side than we mention client true than only in client side we render this component
  // const [isClient, setisClient] = useState(false)
  // useEffect(() => {
  //   setisClient(true)
  // }, [])


  const { pageInfo, experiences, projects, skills, socials } = await fetchdata();



 
  return (
    <>
      {/* components are snapable  */}
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ffb64a]/80">
        {/*Header  */}

        <Header socials={socials} />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
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

export default (Home);


//server side rendering
// server side data build fetch and caches it 

async function fetchdata() {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();


  return ({
    pageInfo,
    experiences,
    skills,
    projects,
    socials
  })

  //next.js will attempt to re-generate the page
  // when a request comes in
  //at most once every 10 seconds
  // revalidate: 10,
}

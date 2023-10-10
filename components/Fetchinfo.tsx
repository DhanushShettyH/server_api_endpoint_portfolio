import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

import LaunchPage from './LaunchPage';



type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];

}


const Fetchinfo = async()=> {

    const data= await fetchdata();
   
    
  return (
    <>

    <LaunchPage data={data}/>
    </>
  );
}

export default React.memo(Fetchinfo);


//server side rendering
// server side data build fetch and caches it 

async function fetchdata(){
  
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
  
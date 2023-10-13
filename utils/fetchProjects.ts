import { Project } from "../typings";

export const  fetchProjects = async()=> {
    // here making call to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.json()
    // typing checking data
    const projects: Project[]= data.projects;

    // console.log(projects)
    return projects

}
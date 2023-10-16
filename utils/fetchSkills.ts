import { Skill } from "../typings";

export const  fetchSkills = async()=> {
    // here making call to backend
    const res = await fetch(`http://127.0.0.1/api/getSkills`);
    const data = await res.json()
    // typing checking data
    const skills: Skill[]= data.skills;

    // console.log(skills)
    return skills

}
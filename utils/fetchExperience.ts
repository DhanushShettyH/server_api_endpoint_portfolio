import { Experience } from "../typings";
// this are utility functions used to pull data from backends

export const  fetchExperience = async()=> {
    // here making call to backend
    const res = await fetch(`http://localhost:3000//api/getExperience`);
    const data = await res.json()
    // typing checking data
    const experiences: Experience[]= data.experiences;

    // console.log(experience)
    return experiences

}
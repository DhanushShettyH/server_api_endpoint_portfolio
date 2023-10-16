import { Social } from "../typings";



export const  fetchSocials = async()=> {
    // here making call to backend
    const res = await fetch(`http://localhost:3000/api/getSocials`);
    const data = await res.json()
    // typing checking data
    const socials: Social[]= data.socials;

    // console.log(socials)
    return socials

}
import { Social } from "../typings";



export const  fetchSocials = async()=> {
    // here making call to backend
    const res = await fetch(`http://127.0.0.1/api/getSocials`);
    const data = await res.json()
    // typing checking data
    const socials: Social[]= data.socials;

    // console.log(socials)
    return socials

}
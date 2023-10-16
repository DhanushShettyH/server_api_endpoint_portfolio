import { Social } from "../typings";



export const  fetchSocials = async()=> {
    // here making call to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json()
    // typing checking data
    const socials: Social[]= data.socials;

    // console.log(socials)
    return socials
	

}
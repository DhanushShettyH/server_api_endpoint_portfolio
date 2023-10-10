import { PageInfo } from "../typings";


export const  fetchPageInfo = async()=> {
    // here making call to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.json()
    // typing checking data
    const pageInfo: PageInfo = data.pageInfo;

    // console.log(pageInfo)
    return pageInfo

}

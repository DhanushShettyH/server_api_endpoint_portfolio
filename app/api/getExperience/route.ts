import { Experience } from '../../../typings';
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { NextResponse } from 'next/server';

// if we use this we get technology's only there reference not a actual skills images and all so...
// *[_type == "experience"]{
//   ...,
//   "technologies": technologies[]  
// }

// ... we use this query were reference are expanded into there actual skills values
const query = groq`
*[_type == "experience"]{
  ...,
  technologies[]->
}
`;
type Data = {
  //type annotation that specifies the type of data that the "experiences" variable can hold. In this case, it's an array ([]) of "Experience" objects.
  experiences: Experience[]; 
};

// The function takes a single parameter, which is an object of type Data
export async function GET({ }: Data) {
  //you are fetching data and expecting the result to be an array of Experience objects. 
  const experiences: Experience[] = await sanityClient.fetch(query);  

  return NextResponse.json({ experiences });
}


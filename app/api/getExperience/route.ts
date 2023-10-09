import { Experience } from '../../../typings';
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { NextResponse } from 'next/server';

const query = groq`
*[_type == "experience"]{
  ...,
  "technologies": technologies[]  
}
`;
type Data = {
  experiences: Experience[];
};
export async function GET({ }: Data) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  return NextResponse.json({ experiences });
}


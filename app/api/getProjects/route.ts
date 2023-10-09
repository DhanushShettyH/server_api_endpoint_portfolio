import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { Project } from '../../../typings';
import { NextResponse } from "next/server";

const query = groq`
*[_type == "project"]{
  ...,
  "technologies": technologies[] 
}
`;

type Data = {
  projects: Project[];
};
export async function GET({ }: Data)  {
  const projects: Project[] = await sanityClient.fetch(query);

  return NextResponse.json({ projects });
}





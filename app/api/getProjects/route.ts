import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { Project } from '../../../typings';
import { NextResponse } from "next/server";

const query = groq`
*[_type == "project"]{
  ...,
  technologies[]->
}
`;
// update project
type Data = {
  projects: Project[];
};
export async function GET()  {
  const projects: Project[] = await sanityClient.fetch(query);

  return NextResponse.json({ projects });
}





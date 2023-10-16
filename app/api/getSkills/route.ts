import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { Skill } from '../../../typings';
import { NextResponse } from "next/server";

const query = groq`*[_type == "skill"]`;

type Data = {
  skills: Skill[];
};
export async function GET()  {
  const skills: Skill[] = await sanityClient.fetch(query);

  return NextResponse.json({ skills });
}


import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { PageInfo } from '../../../typings';
import { NextResponse } from "next/server";

const query = groq`
*[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};
export async function GET({ }: Data) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  return NextResponse.json({ pageInfo });
}


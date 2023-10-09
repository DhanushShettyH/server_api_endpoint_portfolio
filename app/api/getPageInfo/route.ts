import { groq } from "next-sanity";
import { sanityClient } from "../../../sanityclient";
import { PageInfo } from '../../../typings';
import { NextResponse } from "next/server";

const query = groq`
*[_type == "pageIngo"][0]
`;

type Data = {
  pageIngo: PageInfo;
};
export async function GET({ }: Data) {
  const pageIngo: PageInfo = await sanityClient.fetch(query);

  return NextResponse.json({ pageIngo });
}


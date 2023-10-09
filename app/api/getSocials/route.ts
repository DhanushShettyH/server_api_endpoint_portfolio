import {groq} from "next-sanity";
import { sanityClient } from '../../../sanityclient';
import { Social } from '../../../typings';
import { NextResponse } from 'next/server';

const query = groq`*[_type == "social"]`

type Data={
    socials:Social[]
}
export async function GET({ }: Data) {

    const socials: Social[]= await sanityClient.fetch(query)

    return NextResponse.json({ socials });
  }



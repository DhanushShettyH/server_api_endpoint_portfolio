import {createClient} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-10-08",
    useCdn:process.env.NODE_ENV === "production",
};

// set up client for fetching data in getprops page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any)=> createImageUrlBuilder(sanityClient).image(source)
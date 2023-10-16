import {createClient} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

export const config = {
    dataset: "production",
    projectId: "e0mda5qt",
    apiVersion: "2023-10-08",
    useCdn:process.env.NODE_ENV === "production",
};

// set up client for fetching data in getprops page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any)=> createImageUrlBuilder(sanityClient).image(source)
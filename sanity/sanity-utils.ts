import { project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise <project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
          }`
    )
}

export async function getProject(slug:string): Promise <project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content,
          }`,
          { slug }
    )
}
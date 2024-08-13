import { PortableTextBlock } from "next-sanity";

export type project = {
    _id: string;
    _createAt:Date;
    name:string;
    slug:string;
    image:string;
    url:string;
    content:PortableTextBlock[];

}
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="max-w-5xl mx-auto py-20">
      <header className="flex flex-row items-center justify-between">
        <h1 className="text-4xl">{project.name}</h1>
        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopenr noreferrer"
        >
          View Project
        </a>
      </header>
      <div className="mt-8 text-lg">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
      />
    </div>
  );
}

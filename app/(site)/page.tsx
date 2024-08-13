import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold py-20">
        Hello! I&apos;m{" "}
        <span className="bg-gradient-to-r from-stone-300 to-amber-200 bg-clip-text text-transparent">
          Josh H.
        </span>
      </h1>
      <div className="w-full mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="w-full border border-black-100 rounded-lg px-4 py-2 hover:scale-105 ease-in-out duration-500"
          >
            <h1 className="text-xl">{project.name}</h1>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-100"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

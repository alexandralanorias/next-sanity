import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-300 via-orange-100 to-amber-200 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="border border-amber-100 bg-zinc-900 rounded-lg text-amber-100 font-bold py-3 px-4 whitespace-nowrap hover:bg-amber-100 hover:text-black transition">
        View Project
      </a>
    </header>

    <div className="text-lg text-amber-100 mt-5">
      <PortableText value={project.content} />
    </div>

    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-amber-100 object-cover rounded-xl" />
  </div>
} 
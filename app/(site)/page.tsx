import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold text-zinc-400">hi hello i&apos;m
        <span className="bg-gradient-to-r from-orange-300 via-orange-100 to-amber-200 bg-clip-text text-transparent"> alexa!</span>
      </h1>
      <p className="mt-3 text-xl text-amber-100">I&apos;m a Filipina developer from Davao City, and I love tinkering with React and Next.js!</p>
      <h2 className="mt-24 font-bold text-amber-100 text-3xl">My Projects</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-amber-100 rounded-lg p-1 hover:scale-105 hover:border-orange-400 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-amber-100"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-300 via-orange-100 to-amber-200 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}

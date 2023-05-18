import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div><h1 className="bg-gradient-to-r from-orange-300 via-orange-100 to-amber-200 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg text-amber-100 mt-10"><PortableText value={page.content} /></div>
    </div>
  )
}


import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import Footer from '../components/footer'; // Import the Footer component

export const metadata = {
  title: 'Alexandra Lanorias',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="px-6 sm:px-0 md:px-0 bg-zinc-900 max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-300 via-orange-100 to-amber-200 bg-clip-text text-transparent text-lg font-bold">Alexandra Lanorias</Link>
          <div className="flex items-center gap-5 text-sm text-amber-100">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}
            {/* Resume Link */}
            <a href="https://drive.google.com/uc?export=download&id=1eO0XkHyRc-FVMOhEvTpq7Vo5h4MnLKDJ" download className="hover:underline">Resume</a>

          </div>

        </header>
        <main className="py-20">{children}</main>

        {/* Include the Footer component */}
        <Footer />
      </body>
    </html>
  )
}

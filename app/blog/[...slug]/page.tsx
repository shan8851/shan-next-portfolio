import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Link from "next/link"
import { BiLeftArrowAlt } from "react-icons/bi"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function BlogPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert text-lg">
      <Link className="font-light flex gap-1 text-slate-600 hover:text-black items-center my-4 dark:text-slate-300 dark:hover:text-white" href="/blog">
        <BiLeftArrowAlt />
        go back
      </Link>
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="text-2xl mt-0 text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <hr className="my-4" />
      <Mdx code={post.body.code} />
      <Link className="font-light flex gap-1 text-slate-600 hover:text-black items-center my-4 dark:text-slate-300 dark:hover:text-white" href="/blog">
        <BiLeftArrowAlt />
        go back
      </Link>
    </article>
  )
}

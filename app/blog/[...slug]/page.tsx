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
    <article className="p-4 prose dark:prose-invert text-lg">
      <Link className="font-light flex gap-1 items-center text-pink-400 hover:text-pink-500 decoration-transparent w-fit" href="/blog">
        <BiLeftArrowAlt />
        go back
      </Link>
      <h3 className="mb-2 text-green-500">{`-${post.title}`}</h3>
      {post.description && (
        <p className="text-lg mt-0 pl-4 text-orange-400">
          {post.description}
        </p>
      )}
      <Mdx code={post.body.code} />
      <Link className="font-light flex gap-1 items-center text-pink-400 hover:text-pink-500 decoration-transparent w-fit" href="/blog">
        <BiLeftArrowAlt />
        go back
      </Link>
    </article>
  )
}

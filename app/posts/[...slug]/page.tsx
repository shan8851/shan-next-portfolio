import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"

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

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) notFound();

  return (
    <article className="py-10 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-primary">
        {post.title}
      </h1>
      {post.description && (
        <p className="text-lg text-muted-foreground mb-6">{post.description}</p>
      )}
      <Mdx code={post.body.code} />
    </article>
  );
}

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx-components";
import { Metadata } from "next";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function BlogPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-2 text-text text-lg">
      <Link
        className="font-light flex gap-1 text-textSecondary hover:text-purple items-center my-4 transition-colors"
        href="/blog"
      >
        <BiLeftArrowAlt />
        go back
      </Link>

      <h2 className="text-green text-2xl font-semibold mb-2">{post.title}</h2>

      {post.description && (
        <p className="text-xl mt-0 text-textSecondary">{post.description}</p>
      )}

      <hr className="my-4 border-border" />

      <Mdx code={post.body.code} />

      <Link
        className="font-light flex gap-1 text-textSecondary hover:text-purple items-center my-6 transition-colors"
        href="/blog"
      >
        <BiLeftArrowAlt />
        go back
      </Link>
    </article>
  );
}

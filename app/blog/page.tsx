import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function BlogIndex() {
  return (
    <div className="prose dark:prose-invert">
      <h3 className="mt-12">Blog</h3>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h4>{post.title}</h4>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}

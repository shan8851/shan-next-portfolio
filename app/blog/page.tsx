import { allPosts } from "@/.contentlayer/generated"
import dayjs from "dayjs"
import Link from "next/link"

export default function BlogIndex() {
  const postsByDate = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  )
  return (
    <div className="prose dark:prose-invert">
      <h3 className="mt-12">Blog</h3>
      {postsByDate.map((post) => {
      const date = dayjs(post.date).format("MMMM DD, YYYY")
      return (
        <article key={post._id}>
          <div className="flex justify-between items-center">
            <Link href={post.slug} className="flex-grow">
              <h4 className="m-0">{post.title}</h4>
            </Link>
            <p className="text-sm font-light whitespace-nowrap m-0">{date}</p>
          </div>
          {post.description && <p className="text-sm">{post.description}</p>}
        </article>
      )})}
    </div>
  )
}

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
      <h2 className="mt-12">Blog</h2>
      {postsByDate.map((post) => {
      const date = dayjs(post.date).format("MMMM DD, YYYY")
      return (
        <article className="mb-6" key={post._id}>
          <div className="flex justify-between items-center">
            <Link href={post.slug} className="flex-grow">
              <h3 className="m-0">{post.title}</h3>
            </Link>
            <p className="text-sm font-light whitespace-nowrap m-0">{date}</p>
          </div>
          {post.description && <p className="text-lg">{post.description}</p>}
          <div className="flex gap-1">
            {post.tags?.split(',').map(tag => <p className="text-sm bg-slate-300 dark:bg-slate-700 py-0.5 px-1 rounded-md m-0" key={tag.trim()}>{tag.trim()}</p>)}
          </div>
        </article>
      )})}
    </div>
  )
}

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
      <h2 className="mt-12 text-green-400">Blog</h2>
      {postsByDate.map((post) => {
      const date = dayjs(post.date).format("MMMM DD, YYYY")
      return (
        <article className="mb-3 pb-3 border-b" key={post._id}>
          <div className="flex justify-between gap-4">
            <Link href={post.slug} className="flex-grow no-underline">
              <h4 className="m-0 text-pink-400 hover:underline">{post.title}</h4>
            </Link>
            <p className="text-sm font-light whitespace-nowrap m-0">{date}</p>
          </div>
          {post.description && <p className="text-md">{post.description}</p>}
          <div className="flex gap-1">
            {post.tags?.split(',').map(tag => <p className="text-xs bg-slate-300 dark:bg-slate-700 py-0.5 px-1 rounded-md m-0" key={tag.trim()}>{tag.trim()}</p>)}
          </div>
        </article>
      )})}
    </div>
  )
}

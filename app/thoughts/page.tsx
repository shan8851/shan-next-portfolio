import { allPosts } from "@/.contentlayer/generated"
import dayjs from "dayjs"
import Link from "next/link"
import { BiLeftArrowAlt } from "react-icons/bi";

export default function ThoughtsIndex() {
  const postsByDate = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }
  )
  return (
    <div className="prose dark:prose-invert p-4 max-w-full">
      <Link className="font-light flex gap-1 items-center text-pink-400 hover:text-pink-500 decoration-transparent w-fit" href="/">
        <BiLeftArrowAlt />
        go back home
      </Link>
      <h2 className="m-0 my-4">Thoughts</h2>
      {postsByDate.map((post) => {
      const date = dayjs(post.date).format("MMMM DD, YYYY")
      return (
        <article className="flex flex-col mb-6" key={post._id}>
              <Link
                href={post.slug}
                className="text-green-500 hover:text-green-800 decoration-transparent"
              >
                {`› ${post.title}`}
              </Link>
              <p className="text-sm font-light pl-6 m-0 text-orange-400">
                {date}
              </p>
              {post.description && (
                <p className="text-md m-0 pl-6">{post.description}</p>
              )}
            </article>
      )})}
    </div>
  )
}

import { allPosts } from "@/.contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export const RecentPosts: React.FC = () => {
    const sortedAndLimitedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3 || allPosts.length);
  return (
    <div className="flex flex-col gap-3">
      <h3>Recent posts</h3>
      <p className="text-md">Writing is something that I have always enjoyed. I have kept numerous blogs in the past documenting things from everyday life to my journey in development. Mostly now my writing focusses on my general musings around the tech space and helping people land their first role in the industry.</p>
      <div>
        {sortedAndLimitedPosts.map((post) => {
      const date = dayjs(post.date).format("MMMM DD, YYYY")
      return (
        <article className="mb-6"  key={post._id}>
          <div className="flex justify-between items-center">
            <Link href={post.slug} className="flex-grow">
              <h4 className="m-0">{post.title}</h4>
            </Link>
            <p className="text-sm font-light whitespace-nowrap m-0">{date}</p>
          </div>
          {post.description && <p className="text-md">{post.description}</p>}
          <div className="flex gap-1">
           {post.tags?.split(',').map(tag => <p className="text-sm bg-slate-300 dark:bg-slate-700 py-0.5 px-1 rounded-md m-0" key={tag.trim()}>{tag.trim()}</p>)}
           </div>
        </article>
      )})}
      <Link className="font-light flex gap-1 text-slate-600 hover:text-black items-center my-4 dark:text-slate-300 dark:hover:text-white" href="/blog">
        all posts
        <BiRightArrowAlt />
      </Link>
      </div>
    </div>
  );
};

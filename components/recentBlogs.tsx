import { allPosts } from "@/.contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export const RecentPosts: React.FC = () => {
  const sortedAndLimitedPosts = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3 || allPosts.length);
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-green-400">Writing</h3>
      <p className="text-md">
        Writing has always been part of how I learn and reflect. Over the years, I’ve kept blogs on everything from dev
        life to breaking into tech. These days, I’m focused on DAO tooling, full-stack engineering in Web3, and helping
        others navigate the space.
      </p>

      <div>
        {sortedAndLimitedPosts.map((post) => {
          const date = dayjs(post.date).format("MMMM DD, YYYY");
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
                {post.tags?.split(",").map((tag) => (
                  <p className="text-sm bg-slate-300 dark:bg-slate-700 py-0.5 px-1 rounded-md m-0" key={tag.trim()}>
                    {tag.trim()}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
        <Link
          className="font-light flex gap-1 text-pink-400 items-center my-4 no-underline hover:underline"
          href="/blog"
        >
          all posts
          <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  );
};

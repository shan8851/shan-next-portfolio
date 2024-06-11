import { allPosts } from '@/.contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

export const RecentPosts: React.FC = () => {
  const sortedAndLimitedPosts = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 6 || allPosts.length);
  return (
    <div className="flex flex-col gap-1 px-4">
      <h3>Recent posts</h3>
      <p className="text-md">
        Writing is something that I have always enjoyed. I have kept numerous
        blogs in the past documenting things from everyday life to my journey in
        development. Mostly now my writing focusses on my general musings around
        the tech space and helping people land their first role in the industry.
      </p>
      <div>
        {sortedAndLimitedPosts.map((post) => {
          const date = dayjs(post.date).format('MMMM DD, YYYY');
          return (
            <article className="flex flex-col mb-6" key={post._id}>
              <Link
                href={post.slug}
                className="text-green-500 hover:text-green-800 decoration-transparent"
              >
                {`-${post.title}`}
              </Link>
              <p className="text-sm font-light pl-4 m-0 text-orange-400">
                {date}
              </p>
              {post.description && (
                <p className="text-md m-0 pl-4">{post.description}</p>
              )}
            </article>
          );
        })}
        <Link
          className="font-light flex gap-1 text-pink-400 hover:text-pink-500 items-center my-4 w-fit"
          href="/blog"
        >
          all posts
          <BiRightArrowAlt />
        </Link>
      </div>
    </div>
  );
};

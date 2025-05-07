import { allPosts } from '@/.contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';

export const RecentPosts: React.FC = () => {
  const sortedAndLimitedPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-green font-semibold tracking-tight text-xl">
          Writing
        </h3>
        <p className="text-textSecondary text-base mt-2 max-w-prose">
          Writing has always been part of how I learn and reflect. These days
          I’m focused on DAO tooling, full-stack engineering in Web3, and
          helping others navigate the space.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {sortedAndLimitedPosts.map((post) => {
          const date = dayjs(post.date).format('MMMM DD, YYYY');
          return (
            <article className="border-b border-border pb-4" key={post._id}>
              <div className="flex justify-between items-center mb-1 gap-4">
                <Link
                  href={post.slug}
                  className="text-lg font-medium text-text hover:text-purple transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-textSecondary whitespace-nowrap">
                  {date}
                </p>
              </div>

              {post.description && (
                <p className="text-textSecondary text-sm leading-relaxed mt-1">
                  {post.description}
                </p>
              )}

              {post.tags?.length && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.split(',').map((tag) => (
                    <span
                      key={tag.trim()}
                      className="text-xs bg-surface text-textSecondary px-2 py-0.5 rounded-md border border-border"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </article>
          );
        })}

        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm text-text hover:text-green"
        >
          all posts <BiRightArrowAlt className="inline-block" />
        </Link>
      </div>
    </section>
  );
};

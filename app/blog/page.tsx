import { allPosts } from '@/.contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function BlogIndex() {
  const postsByDate = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-10 space-y-8 text-base leading-relaxed text-text">
      <h1 className="text-3xl font-bold text-green">Writing</h1>

      <div className="flex flex-col gap-y-6">
        {postsByDate.map((post, index) => {
          const date = dayjs(post.date).format('MMMM DD, YYYY');
          const isLast = index === postsByDate.length - 1;

          return (
            <article
              key={post._id}
              className={`pb-4 ${!isLast ? 'border-b border-border' : ''}`}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <Link
                    href={post.slug}
                    className="text-lg font-medium text-text hover:text-purple transition-colors"
                  >
                    {post.title}
                  </Link>
                  {post.description && (
                    <p className="text-sm text-textSecondary mt-1 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  {post.tags?.length && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.tags.split(',').map((tag) => (
                        <span
                          key={tag.trim()}
                          className="text-xs px-2 py-0.5 rounded-md border border-border text-textSecondary bg-surface"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <p className="text-sm text-textSecondary whitespace-nowrap pt-1">
                  {date}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import { allPosts } from "@/.contentlayer/generated"
import dayjs from "dayjs"
import Link from "next/link"

export default function BlogIndex() {
  const postsByDate = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-10 space-y-6 text-base leading-relaxed text-text">
      <h2 className="text-xl font-semibold text-green">Writing</h2>

      <div className="flex flex-col gap-6">
        {postsByDate.map((post, index) => {
          const date = dayjs(post.date).format('MMMM DD, YYYY');
          const isLast = index === postsByDate.length - 1;

          return (
            <article
              key={post._id}
              className={`pb-4 ${!isLast ? 'border-b border-border' : ''}`}
            >
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
                <p className="text-sm text-textSecondary leading-relaxed">
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
      </div>
    </section>
  );
}

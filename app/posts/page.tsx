import { allPosts } from "@/.contentlayer/generated"
import dayjs from "dayjs"
import Link from "next/link"

export default function BlogIndex() {
  const postsByDate = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-10 space-y-6 text-base leading-relaxed text-foreground">
      <h2 className="text-xl font-semibold text-brand-primary">Blog</h2>

      <div className="flex flex-col gap-6">
        {postsByDate.map((post) => {
          const date = dayjs(post.date).format('MMMM DD, YYYY');
          return (
            <article key={post._id} className="border-b border-border pb-4">
              <div className="flex justify-between items-center mb-1 gap-4">
                <Link
                  href={post.slug}
                  className="text-lg font-medium text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-muted-foreground whitespace-nowrap">
                  {date}
                </p>
              </div>

              {post.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
              )}

              {post.tags?.length && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.split(',').map((tag) => (
                    <span
                      key={tag.trim()}
                      className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md"
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

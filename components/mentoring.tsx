import { EMAIL_URL, TWITTER_URL } from '@/app/constants';

export const Mentoring: React.FC = () => (
  <section className="flex flex-col gap-6">
    <div>
      <h2 className="text-green text-xl font-semibold tracking-tight">
        Mentoring
      </h2>
      <p className="text-textSecondary text-base mt-2 max-w-prose leading-relaxed">
        I’ve been mentoring developers for the past few years — starting with
        friends, then growing into community-based and platform mentoring. I’ve
        helped multiple people land their first tech roles and level up their
        skills through focused support, honest feedback, and real-world
        insights.
      </p>
    </div>

    <p className="text-base text-textSecondary leading-relaxed max-w-prose">
      While I’m no longer active on platforms like Coding Coach or The Mentoring
      Club, I’m always open to supporting motivated learners. If you’re serious
      about growth and want guidance breaking into the industry, feel free to
      reach out via{' '}
      <a
        className="text-green underline underline-offset-4 hover:text-purple transition-colors"
        href={EMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>{' '}
      or{' '}
      <a
        className="text-green underline underline-offset-4 hover:text-purple transition-colors"
        href={TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        DM me on X
      </a>
      , and we can work something out.
    </p>
  </section>
);

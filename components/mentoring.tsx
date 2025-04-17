import { EMAIL_URL, TWITTER_URL } from "@/app/constants";

export const Mentoring: React.FC = () => (
  <div className="flex flex-col gap-3">
    <h2 className="text-green-400">Mentoring</h2>
    <p className="text-md">
      I’ve been mentoring developers for the past few years — starting with friends, then growing into community-based
      and platform mentoring. I&apos;ve helped multiple people land their first tech roles and level up their skills
      through focused support, honest feedback, and real-world insights.
    </p>
    <p>
      While I’m no longer active on platforms like Coding Coach or The Mentoring Club, I’m always open to supporting
      motivated learners. If you’re serious about growth and want guidance breaking into the industry, feel free to
      reach out via{" "}
      <a className="text-pink-400 no-underline hover:underline" href={EMAIL_URL} target="_blank">
        email
      </a>{" "}
      or{" "}
      <a className="text-pink-400 no-underline hover:underline" href={TWITTER_URL} target="_blank">
        DM me on X
      </a>{" "}
      and we can work something out.
    </p>
  </div>
);

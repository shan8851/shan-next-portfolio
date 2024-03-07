import {
  CODING_COACH_URL,
  EMAIL_URL,
  THE_MENTORING_CLUB_URL,
  TWITTER_URL,
} from '@/app/constants';

export const Mentoring: React.FC = () => (
  <div className="flex flex-col gap-3">
    <h2>Mentoring</h2>
    <p className="text-lg">
      I&apos;ve been mentoring for a few years now, starting with friends and
      then members of communities I am involved in. I got a lot out of this,
      helped numerous people land their first jobs, so decided to meentor on
      platforms like{' '}
      <a href={CODING_COACH_URL} target="_blank">
        coding coach
      </a>{' '}
      and{' '}
      <a href={THE_MENTORING_CLUB_URL} target="_blank">
        The Mentoring Club
      </a>
      . Mentoring on those platforms is hit and miss, but I am always happy to
      help new developers break into tech and make the most out of their fist
      few years in the job.
    </p>
    <p className="text-lg">
      {' '}
      If this is something that you would be interested then hit one of the
      links above, or reach out to me via{' '}
      <a href={EMAIL_URL} target="_blank">
        email
      </a>{' '}
      or DM me on{' '}
      <a href={TWITTER_URL} target="_blank">
        Twitter
      </a>{' '}
      and we can work something out.
    </p>
  </div>
);

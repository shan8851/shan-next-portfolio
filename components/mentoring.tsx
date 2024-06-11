import {
  BOOK_A_CALL_URL,
  EMAIL_URL,
  TWITTER_URL,
} from '@/app/constants';

export const Mentoring: React.FC = () => (
  <div className="flex flex-col gap-3">
    <h2 className="m-0">Mentoring</h2>
    <p className="text-md m-0">
      I&apos;ve been mentoring for a few years now, starting with friends and
      then members of communities I am involved in. I got a lot out of this,
      helped numerous people land their first jobs, so decided to mentor on
      platforms like coding coach and The Mentoring Club. Mentoring on those platforms is hit and miss, so I am not really active there now.
      However I am still looking to work with new people who are a good fit, so anybody interested can reach out to me via{' '}
      <a className='decoration-transparent text-pink-400 hover:text-pink-500' href={EMAIL_URL} target="_blank">
        email
      </a>{' '}
      , DM me on{' '}
      <a className='decoration-transparent text-pink-400 hover:text-pink-500' href={TWITTER_URL} target="_blank">
        Twitter
      </a>{' '} or simply <a className='decoration-transparent text-pink-400 hover:text-pink-500' href={BOOK_A_CALL_URL} target="_blank">book a call with me</a>{' '}
      and we can work something out.
    </p>
  </div>
);

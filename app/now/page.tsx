export default function Now() {
  return (
    <div className="prose dark:prose-invert p-4 text-md">
      - This page was inspired by the{' '}
      <a
        className="decoration-transparent text-pink-400 hover:text-pink-500"
        href="https://sive.rs/nowff"
        target="_blank"
      >
        now movement
      </a>{' '}
      by{' '}
      <a
        className="decoration-transparent text-pink-400 hover:text-pink-500"
        href="https://x.com/sivers?lang=en"
        target="_blank"
      >
        @Sivers
      </a>
      <div>
        - last updated: <span className="font-extrabold">June 2024</span>
      </div>
      <div>
        <h3 className="text-green-500">- work</h3>
        <p className="pl-4">
          Career growth. In me early years I was obsessed with growth and
          becoming a better engineer, but over the years I have got a little
          comfortable and complacent. However, the itch is back, I really want
          to delve back in, work hard and see where I can go!
        </p>
        <p className="pl-4">
          <a href="https://app.cielo.finance/">Cielo</a>: Still working hard in
          the Cielo Finance project, we have shipped some big things lately and
          there is more to come. I&apos;m naturally very bullish on the project,
          the team and crypto in general. I&apos;m excited to see where we can
          take this.
        </p>
      </div>
      <div>
        <h3 className="text-orange-400">- life</h3>
        <p className="pl-4">Working hard, being curious and striving for balance.</p>
        <p className="pl-4">
          Starting to become attracted to generating some passive income
          streams, the future and all that jazz.
        </p>
      </div>
      <div>
        <h3 className="text-pink-400">- balance</h3>
        <p className="pl-4">Football, Squash, reading, friends & family</p>
      </div>
    </div>
  );
}

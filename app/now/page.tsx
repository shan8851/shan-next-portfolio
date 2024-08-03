export default function Now() {
  return (
    <div className="prose dark:prose-invert mt-6 text-md">
      This page was inspired by the{' '}
      <a
        className="text-pink-400 no-underline hover:underline"
        href="https://sive.rs/now"
      >
        now movement
      </a>{' '}
      by{' '}
      <a
        className="text-pink-400 no-underline hover:underline"
        href="https://x.com/sivers?lang=en"
      >
        @Sivers
      </a>
      <p>
        last updated:{' '}
        <span className="font-extrabold text-orange-400">June 2024</span>
      </p>
      <div className="my-2">
        <h4 className="text-green-400">Work & Learning</h4>
        <p>
          Career growth. In me early years I was obsessed with growth and
          becoming a better engineer, but over the years I have got a little
          comfortable and complacent. However, the itch is back, I really want
          to delve back in, work hard and see where I can go! Main focus right
          now is adding some breadth to my skill set. I am working on becoming
          proficient in Solidity.
        </p>
        <p>
          <a
            className="text-pink-400 no-underline hover:underline"
            href="https://aragon.org"
            target="_blank"
          >
            Aragon
          </a>
          : Just started a new role at Aragon. On a mission to make DAOs
          accessible to all. My primary focus is on the frontend, but looking to
          also leverage and enhance my Solidity skills there.
        </p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Life</h4>
        <p>Working hard, being curious and striving for balance.</p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Balance</h4>
        <p>⚽ 🏋️‍♂️ 📚 🏸 🧑‍🤝‍🧑</p>
      </div>
    </div>
  );
}

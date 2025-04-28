export default function Now() {
  return (
    <div className="prose dark:prose-invert mt-6 text-md">
      Learn more about now pages at{' '}
      <a
        className="text-pink-400 no-underline hover:underline"
        href="https://nownownow.com/about"
      >
        aboutnownownow.com
      </a>{' '}
      <p>
        last updated:{' '}
        <span className="font-extrabold text-orange-400">Apr 2025</span>
      </p>
      <div className="my-2">
        <h4 className="text-green-400">Work & Learning</h4>
        <p>
          Right now, I&apos;m deepening my expertise in DAO infrastructure and
          onchain governance as a Senior Software Engineer at{' '}
          <a
            className="text-pink-400 no-underline hover:underline"
            href="https://aragon.org"
            target="_blank"
          >
            Aragon
          </a>
          . We&apos;re building modular tooling for multi-body governance
          systems. Solving hard problems at the intersection of protocol UX,
          smart contract architecture, and frontend dev.
        </p>
        <p>
          My core focus is still frontend, but I’m actively levelling up my
          backend, infra, and Solidity skills so I can contribute across the
          entire stack. I’m especially interested in stablecoin mechanics,
          tokenized RWAs, and composable governance systems. It’s a steep
          learning curve, but one I’m enjoying a lot.
        </p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Life</h4>
        <p>
          Still active with squash and football regularly. Feeling fitter than I
          have in a while, but would like to add more lifting. Prioritising
          health, deep work, and staying present with my family.
        </p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Balance</h4>
        <p>⚽ 🏋️‍♂️ 📚 🧠 🧑‍🤝‍🧑</p>
      </div>
    </div>
  );
}

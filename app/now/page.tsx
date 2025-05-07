export default function Now() {
  return (
    <section className="mt-10 space-y-6 text-base leading-relaxed text-text">
      <p className="text-textSecondary">
        Learn more about now pages at{' '}
        <a
          href="https://nownownow.com/about"
          className="text-green underline underline-offset-4 hover:text-purple transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutnownownow.com
        </a>
        .
      </p>

      <p className="text-sm text-textSecondary">
        last updated:{' '}
        <span className="font-semibold text-orange">Apr 2025</span>
      </p>

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-green">Work & Learning</h4>
        <p>
          Right now, I’m deepening my expertise in DAO infrastructure and
          onchain governance as a Senior Software Engineer at{' '}
          <a
            href="https://aragon.org"
            className="text-green underline underline-offset-4 hover:text-purple transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aragon
          </a>
          . We’re building modular tooling for multi-body governance systems.
          Solving hard problems at the intersection of protocol UX, smart
          contract architecture, and frontend dev.
        </p>
        <p>
          My core focus is still frontend, but I’m actively levelling up my
          backend, infra, and Solidity skills so I can contribute across the
          entire stack. I’m especially interested in stablecoin mechanics,
          tokenized RWAs, and composable governance systems. It’s a steep
          learning curve, but one I’m enjoying a lot.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-green">Life</h4>
        <p>
          Still active with squash and football regularly. Feeling fitter than I
          have in a while, but would like to add more lifting. Prioritising
          health, deep work, and staying present with my family.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-green">Balance</h4>
        <p className="text-2xl">⚽ 🏋️‍♂️ 📚 🧠 🧑‍🤝‍🧑</p>
      </div>
    </section>
  );
}

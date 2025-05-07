export default function Now() {
  return (
    <section className="mt-10 space-y-8 text-base leading-relaxed text-text">
      <h1 className="text-4xl font-bold text-green tracking-tighter">Now</h1>

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
        <h2 className="text-2xl font-semibold text-purple tracking-tighter">
          Work & Learning
        </h2>
        <p className="leading-loose">
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
        <p className="leading-loose">
          My core focus is still frontend, but I’m actively levelling up my
          backend, infra, and Solidity skills. I’m especially interested in
          stablecoin mechanics, tokenized RWAs, and composable governance
          systems.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-purple tracking-tighter">
          Life & Balance
        </h2>
        <p className="leading-loose">
          Still active with squash and football regularly. Feeling fitter than I
          have in a while, but would like to add more lifting. Prioritising
          health, deep work, and staying present with my family.
        </p>
        <div className="text-2xl text-center">⚽ 🏋️‍♂️ 📚 🧠 🧑‍🤝‍🧑</div>
      </div>
    </section>
  );
}

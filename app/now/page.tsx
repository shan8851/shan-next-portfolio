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
        <span className="font-extrabold text-orange-400">Sep 2024</span>
      </p>
      <div className="my-2">
        <h4 className="text-green-400">Work & Learning</h4>
        <p>
          As always continuously growing, playing with new technology and
          focussing on become stronger in the web development space. Away from
          the web I am working towards becoming more proficient with Solidity,
          smart contracts and the EVM. Since joining Aragon this has accelerated
          a bunch as we are interacting regularly with the EVM and various smart
          contracts. I am not building as much as I would like to be, but I am
          learning a lot and that is the most important thing.
        </p>
        <p>
          A few months in, I am now fully settled into my role as Senior
          software engineer at{' '}
          <a
            className="text-pink-400 no-underline hover:underline"
            href="https://aragon.org"
            target="_blank"
          >
            Aragon
          </a>
          . It is going really well, the team is amazing and we are working on
          some complex problems that are both challenging and rewarding. I am
          learning a lot and I am excited to see where this journey takes me.
        </p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Life</h4>
        <p>
          Still lifting weights and playing football regularly. Feeling stringer
          and fitter than I have in a long time.
        </p>
      </div>
      <div className="my-2">
        <h4 className="text-green-400">Balance</h4>
        <p>⚽ 🏋️‍♂️ 📚 🏸 🧑‍🤝‍🧑</p>
      </div>
    </div>
  );
}

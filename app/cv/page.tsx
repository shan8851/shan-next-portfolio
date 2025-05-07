import { Job } from '@/components/job';
import { jobsData } from '../data/jobs';

export default function Cv() {
  return (
    <section className="mt-10 space-y-8 text-base leading-relaxed text-text">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-green">
          Senior Full Stack Engineer | DeFi Governance & DAO Infrastructure
        </h2>
        <p className="text-textSecondary">
          Frontend-leaning full stack engineer with 6+ years of experience.
          Currently focused on building governance, treasury, and DeFi analytics
          tools. At Aragon, I deliver modular DAO interfaces including
          delegation and advanced voting flows. Previously scaled a DeFi data
          platform across 16+ EVM chains, and co-founded a B2C startup.
          Passionate about simplifying complex systems through composable,
          user-centric tooling. Currently expanding backend and Solidity
          capabilities to deepen full-stack impact.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green">Work Experience</h3>
        {jobsData.map((job) => (
          <Job key={job.company} jobDetails={job} />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green">Tooling & Stack</h3>
        <ul className="list-disc list-inside space-y-2 text-textSecondary">
          <li>
            <span className="font-semibold text-text">Frontend:</span> React,
            Next.js, Tailwind, TanStack
          </li>
          <li>
            <span className="font-semibold text-text">Web3:</span> Viem, Wagmi,
            Solidity, Foundry
          </li>
          <li>
            <span className="font-semibold text-text">Backend/Data:</span>{' '}
            Node.js, GraphQL, REST, Firebase, Rust (Learning)
          </li>
          <li>
            <span className="font-semibold text-text">Infra:</span> Docker,
            CI/CD, GitHub Actions
          </li>
        </ul>
      </div>
    </section>
  );
}

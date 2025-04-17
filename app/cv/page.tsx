import { Job } from "@/components/job";
import { jobsData } from "../data/jobs";

export default function Cv() {
  return (
    <div className="prose dark:prose-invert my-6">
      <h3 className="text-green-400">Senior Full Stack Engineer | DeFi Governance & DAO Infrastructure</h3>
      <p>
        Frontend leaning full stack engineer with 6+ years of experience. Currently focussed on building governance,
        treasury, and DeFi analytics tools.At Aragon, I deliver modular DAO interfaces including delegation and advanced
        voting flows. Previously scaled a DeFi data platform across 16+ EVM chains, and co-founded a B2C startup.
        Passionate about simplifying complex systems through composable, user-centric tooling. Currently expanding
        backend and Solidity capabilities to deepen full-stack impact.
      </p>
      <h3 className="text-green-400">Work Experience</h3>
      {jobsData.map((job) => (
        <Job key={job.company} jobDetails={job} />
      ))}
      <h3 className="text-green-400">Tooling & Stack</h3>
      <ul>
        <li>
          <span className="font-bold">Frontend:</span> React, Next.js, Tailwind, TanStack
        </li>
        <li>
          <span className="font-bold">Web3:</span> Viem, Wagmi, Soldity, Foundry
        </li>
        <li>
          <span className="font-bold">Backend/Data:</span> Nodejs, GraphQL, REST, Firebase, Rust (Learning)
        </li>
        <li>
          <span className="font-bold">Infra:</span> Docker, CI/CD, Github Actions
        </li>
      </ul>
    </div>
  );
}

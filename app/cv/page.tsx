import { Job } from '@/components/job';
import { jobsData } from '../data/jobs';
import { LuDownload } from 'react-icons/lu';

const CvSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-purple">{title}</h2>
    {children}
  </section>
);

export default function Cv() {
  return (
    <div className="mt-10 space-y-10 text-base leading-relaxed text-text">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold text-green">CV</h1>
        <a
          download
          href="/cv.pdf"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-surface transition-colors"
        >
          <LuDownload className="text-lg" />
          Download PDF
        </a>

        <div className="space-y-3 max-w-3xl">
          <p className="text-lg font-semibold text-purple">
            Full Stack Engineer · DeFi Governance & DAO Infrastructure
          </p>

          <p className="text-text">
            Frontend-leaning full stack engineer with 6+ years of experience.
            Currently focused on building governance, treasury, and DeFi
            analytics tools. At Aragon, I deliver modular DAO interfaces
            including delegation and advanced voting flows. Previously scaled a
            DeFi data platform across 16+ EVM chains, and co-founded a B2C
            startup. Passionate about simplifying complex systems through
            composable, user-centric tooling. Currently expanding backend and
            Solidity capabilities to deepen full-stack impact.
          </p>
        </div>
      </header>

      <CvSection title="Work Experience">
        {jobsData.map((job) => (
          <Job key={job.company} jobDetails={job} />
        ))}
      </CvSection>

      <CvSection title="Tooling & Stack">
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
      </CvSection>

      <div className="pt-6 border-t border-border">
        <a
          download
          href="/cv.pdf"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-surface transition-colors"
        >
          <LuDownload className="text-lg" />
          Download CV
        </a>
      </div>
    </div>
  );
}

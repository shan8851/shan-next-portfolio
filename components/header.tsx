import { EMAIL_URL } from '@/app/constants';
import Image from 'next/image';
import { LuDownload, LuMail } from 'react-icons/lu';

export const Header = () => (
  <header className="flex flex-col gap-6 pt-10">
    <div className="flex items-center gap-4">
      <Image
        className="rounded-full w-20 h-20 border border-border"
        src="/avatar.png"
        alt="avatar"
        height={100}
        width={100}
      />
      <h1 className="text-4xl font-extrabold text-green tracking-tight">
        shan8851.eth <span className="text-textSecondary">ᵍᵐ</span>
      </h1>
    </div>

    <p className="text-xl font-medium leading-snug text-text">
      Full Stack <span className="text-purple">Web3 Engineer</span>, Governance
      Builder, Relentless Learner
    </p>

    <p className="text-base leading-loose text-textSecondary max-w-prose">
      Designing intuitive interfaces, shaping protocol UX, and building
      end-to-end systems for DAOs, DeFi, and decentralised infrastructure.
    </p>
    <div className="flex items-center gap-2">
      <a
        download
        href="/cv.pdf"
        className="border border-border rounded-xl hover:bg-surface py-2 px-4 flex gap-2 items-center"
      >
        <LuDownload />
        Download CV
      </a>
      <a
        href={EMAIL_URL}
        className="border border-border rounded-xl hover:bg-surface py-2 px-4 flex gap-2 items-center"
      >
        <LuMail />
        Contact me
      </a>
    </div>
  </header>
);

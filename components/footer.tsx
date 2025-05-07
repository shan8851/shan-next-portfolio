import {
  BUY_COFFEE_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from '@/app/constants';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri';
import { SiBuymeacoffee, SiGithub } from 'react-icons/si';
import { FaTelegram } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 text-sm text-textSecondary mt-12">
      <div className="h-px w-full bg-border" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <a
            href="https://opensource.org/license/mit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-text transition-colors"
          >
            MIT License
          </a>{' '}
          – 2025 © shan8851
        </div>

        <div className="flex gap-4 text-xl">
          <IconLink
            href={TELEGRAM_URL}
            icon={<FaTelegram />}
            label="Telegram"
          />
          <IconLink href={EMAIL_URL} icon={<HiOutlineMail />} label="Email" />
          <IconLink
            href={TWITTER_URL}
            icon={<RiTwitterXFill />}
            label="Twitter"
          />
          <IconLink href={GITHUB_URL} icon={<SiGithub />} label="GitHub" />
          <IconLink
            href={LINKEDIN_URL}
            icon={<RiLinkedinBoxFill />}
            label="LinkedIn"
          />
          <IconLink
            href={BUY_COFFEE_URL}
            icon={<SiBuymeacoffee />}
            label="Buy Me a Coffee"
          />
        </div>
      </div>
    </footer>
  );
};

function IconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-textSecondary hover:text-purple transition-colors duration-200 hover:scale-105"
    >
      {icon}
    </a>
  );
}

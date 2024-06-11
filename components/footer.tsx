import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { SiGithub, SiBuymeacoffee } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import {
  BUY_COFFEE_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/app/constants';

export const Footer = () => {
  return (
    <div className="flex flex-col border-t border-green-500 px-4">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center py-2">
        <div>
          <a href="https://opensource.org/license/mit/" className="text-pink-400 hover:text-pink-500">
            MIT
          </a>{' '}
          - 2024 © shan8851
        </div>
        <div className="flex gap-2 text-lg">
          <a
            target="_blank"
            className="text-pink-400 hover:text-pink-500 hover:cursor-pointer"
            href={LINKEDIN_URL}
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            target="_blank"
            className="text-pink-400 hover:text-pink-500 hover:cursor-pointer"
            href={EMAIL_URL}
          >
            <HiOutlineMail />
          </a>
          <a
            target="_blank"
            className="text-pink-400 hover:text-pink-500 hover:cursor-pointer"
            href={TWITTER_URL}
          >
            <RiTwitterXFill />
          </a>
          <a
            target="_blank"
            className="text-pink-400 hover:text-pink-500 hover:cursor-pointer"
            href={GITHUB_URL}
          >
            <SiGithub />
          </a>
          <a
            target="_blank"
            className="text-pink-400 hover:text-pink-500 hover:cursor-pointer"
            href={BUY_COFFEE_URL}
          >
            <SiBuymeacoffee />
          </a>
        </div>
      </div>
    </div>
  );
};

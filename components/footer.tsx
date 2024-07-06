import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { SiGithub, SiBuymeacoffee } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { BUY_COFFEE_URL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/app/constants';

export const Footer = () => {
  return (
      <div className="felx flex-col">
        <div className="flex bg-slate-700 mb-4 h-[1px]" />
        <div className="flex justify-between items-center py-2">
        <div>
          <a href="https://opensource.org/license/mit/" className="hover:underline text-pink-400">MIT</a> - 2023 © shan8851
        </div>
        <div className="flex gap-2 text-lg">
          <a target='_blank'  className='cursor-pointer text-slate-600 dark:text-slate-400 hover:text-pink-400 hover:dark:text-pink-400' href={LINKEDIN_URL}><RiLinkedinBoxFill /></a>
          <a target='_blank' className='cursor-pointer text-slate-600 dark:text-slate-400 hover:text-pink-400 hover:dark:text-pink-400' href={EMAIL_URL}><HiOutlineMail /></a>
          <a target='_blank' className='cursor-pointer text-slate-600 dark:text-slate-400 hover:text-pink-400 hover:dark:text-pink-400' href={TWITTER_URL}><RiTwitterXFill /></a>
          <a target='_blank' className='cursor-pointer text-slate-600 dark:text-slate-400 hover:text-pink-400 hover:dark:text-pink-400' href={GITHUB_URL}><SiGithub /></a>
          <a target='_blank' className='cursor-pointer text-slate-600 dark:text-slate-400 hover:text-pink-400 hover:dark:text-pink-400' href={BUY_COFFEE_URL}><SiBuymeacoffee /></a>
        </div>
      </div>
      </div>
  )
}


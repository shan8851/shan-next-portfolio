import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { SiGithub, SiBuymeacoffee } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

export const Footer = () => {
  return (
      <div className="felx flex-col">
        <div className="flex bg-slate-700 mb-4 h-[1px]" />
        <div className="flex justify-between items-center py-2">
        <div>
          <a href="https://opensource.org/license/mit/" className="underline text-zinc-400 hover:text-zinc-300">MIT</a> - 2023 © shan8851
        </div>
        <div className="flex gap-2">
          <RiLinkedinBoxFill />
          <HiOutlineMail />
          <RiTwitterXFill />
          <SiGithub />
          <SiBuymeacoffee />
        </div>
      </div>
      </div>
  )
}


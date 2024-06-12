'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  BOOK_A_CALL_URL,
  Commands,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/app/constants';
import { commandRegistry } from './commandRegistry';
import { useTheme } from 'next-themes';
import { allPosts } from '@/.contentlayer/generated';
import { useRouter } from 'next/navigation';

const commandList = Object.values(Commands);

const Prompt = () => (
  <div className="text-blue-500 flex-shrink-0">
    guest@shan8851.eth<span className="font-bold text-pink-400">:$~</span>
  </div>
);

const firstPost = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })[0]

export const Terminal: React.FC = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const { setTheme, theme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  const handleCommand = (command: string) => {
    const [cmd, arg] = command.split(' ');

    switch (cmd) {
      case Commands.CLEAR:
        setOutput([]);
        return;
      case Commands.LIGHT:
        setOutput([
          ...output,
          <div key={output.length}>
            <div className="flex items-center gap-2">
              <Prompt /> <span className="text-green-500">{command}</span>
            </div>
          </div>,
        ]);
        setTheme('light');
        return;
      case Commands.DARK:
        setOutput([
          ...output,
          <div key={output.length}>
            <div className="flex items-center gap-2">
              <Prompt /> <span className="text-green-500">{command}</span>
            </div>
          </div>,
        ]);
        setTheme('dark');
        return;
      case Commands.TWITTER:
      case Commands.X:
        window.open(TWITTER_URL, '_blank');
        return;
      case Commands.GITHUB:
        window.open(GITHUB_URL, '_blank');
        return;
      case Commands.LINKEDIN:
        window.open(LINKEDIN_URL, '_blank');
        return;
      case Commands.EMAIL:
        window.open(EMAIL_URL, '_blank');
        return;
      case Commands.CALL:
        window.open(BOOK_A_CALL_URL, '_blank');
        return;
      case Commands.ARTICLES:
        window.open(`${window.location.origin}/thoughts`, '_blank');
        return;
      case Commands.LATEST:
        window.open(`${window.location.origin}/${firstPost.slug}`, '_blank');
        return;
      default:
        const Component = commandRegistry[cmd as Commands];
        if (Component) {
          setOutput([
            ...output,
            <div key={output.length}>
              <div className="flex items-center gap-2">
                <Prompt /> <span className="text-green-500">{command}</span>
              </div>
              <Component />
            </div>,
          ]);
        } else {
          setOutput([
            ...output,
            <div key={output.length}>
              <div className="flex items-center gap-2">
                <Prompt /> <span className="text-red-500">{command}</span>
              </div>
              Unknown command: {command}
            </div>,
          ]);
        }
        return;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.debug(value);
    handleCommand(value);
    setValue('');
  };

  const isValidCommand = commandList.includes(value.split(' ')[0] as Commands);

  return (
    <div className="p-4">
      <p>
        Type <span className="text-pink-400">`commands`</span> to see a list of
        all commands and what they do.
      </p>
      <div className="max-w-5xl">{output}</div>
      <div className="flex items-center gap-1 mt-4">
        <Prompt />
        <form onSubmit={handleSubmit} className="w-full">
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`p-2 w-full ${
              isValidCommand ? 'text-green-500' : 'text-red-500'
            } outline-none focus:outline-none`}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

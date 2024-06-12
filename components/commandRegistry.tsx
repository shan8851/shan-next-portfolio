'use client';
import React from 'react';
import { CommandList } from './help';
import { ProjectsPage } from './projects';
import { Mentoring } from './mentoring';
import { Commands } from '@/app/constants';
import { Now } from './now';

type CommandProps = {
  [Commands.COMMANDS]: {};
  [Commands.ARTICLES]: {};
  [Commands.NOW]: {};
  [Commands.MENTORING]: {};
};

interface CommandRegistry {
  [key: string]: React.FC<any>;
}

export const commandRegistry: CommandRegistry = {
  [Commands.COMMANDS]: () => <CommandList verbose />,
  [Commands.PROJECTS]: () => <ProjectsPage />,
  [Commands.NOW]: () => <Now />,
  [Commands.MENTORING]: () => <Mentoring />,
};

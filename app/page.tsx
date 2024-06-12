import { Terminal } from '@/components/terminal';

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-full h-full flex flex-col">
      <Terminal />
    </div>
  );
}

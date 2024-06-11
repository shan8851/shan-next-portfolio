import { Header } from '@/components/header';
import { Mentoring } from '@/components/mentoring';
import { ProjectsPage } from '@/components/projects';
import { RecentPosts } from '@/components/recentBlogs';

export default function Home() {
  return (
    <div className="prose dark:prose-invert max-w-full h-full flex flex-col">

      <div className="flex-1 hidden md:flex flex-col md:flex-row divide-x divide-green-500 h-full border-b border-green-500 md:h-0">
        <div className="flex-1 md:w-1/2 md:overflow-y-auto">
          <RecentPosts />
        </div>
        <div className="flex-1 md:w-1/2 md:overflow-y-auto">
          <ProjectsPage />
        </div>
      </div>
      <div className="flex md:hidden flex-col divide-y divide-green-500">
        <RecentPosts />
        <ProjectsPage />
      </div>
      <div className="flex-shrink-0 p-4 hidden md:flex">
        <Mentoring />
      </div>
    </div>
  );
}

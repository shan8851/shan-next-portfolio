import { Header } from "@/components/header";
import { Mentoring } from "@/components/mentoring";
import { ProjectsPage } from "@/components/projects";
import { RecentPosts } from "@/components/recentBlogs";

export default function Home() {
  return (
    <div className=" max-w-3xl w-full flex flex-col gap-12">
      <Header />
      <RecentPosts />
      <ProjectsPage />
      <Mentoring />
    </div>
  );
}

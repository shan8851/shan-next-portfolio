import { Header } from "@/components/header";
import { ProjectsPage } from "@/components/projects";
import { RecentPosts } from "@/components/recentBlogs";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <Header />
      <ProjectsPage />
      <RecentPosts />
    </div>
  )
}

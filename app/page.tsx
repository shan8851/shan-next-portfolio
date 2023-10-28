import { Header } from "@/components/header";
import { ProjectsPage } from "@/components/projects";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <Header />
      <ProjectsPage />
    </div>
  )
}

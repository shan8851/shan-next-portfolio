import { Job } from "@/components/job";
import { jobsData } from "../data/jobs";
import { skillsData } from "../data/skills";
import { interestsData } from "../data/interests";

export default function Cv() {
  return (
    <div className="prose dark:prose-invert p-4">
      <h3>Summary</h3>
      <p>
        With 5 years in the software engineering field, I&apos;ve honed expertise in React, TypeScript, NextJS, crypto, and Web3. My achievements include leading complex projects, co-founding startups, and winning top honours at hackathons like Hackmoney. Passionate about both innovation and education, I&apos;ve mentored over 20 aspiring developers, reflecting a commitment to personal and professional growth.

      </p>
      <h3>Work Experience</h3>
      {jobsData.map((job) => (
        <Job key={job.company} jobDetails={job} />
      ))}
      <h3>Skills</h3>
      <p className="m-0">{skillsData.join(', ')}</p>
      <h3>Interests</h3>
      <p className="m-0">{interestsData.join(', ')}</p>
    </div>
  )
}

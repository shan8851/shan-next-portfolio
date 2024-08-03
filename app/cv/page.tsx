import { Job } from "@/components/job";
import { jobsData } from "../data/jobs";
import { skillsData } from "../data/skills";
import { interestsData } from "../data/interests";

export default function Cv() {
  return (
    <div className="prose dark:prose-invert my-6">
      <h3 className="text-green-400">Summary</h3>
      <p>
        With over 5 years in the software engineering field, I&apos;ve
        predominantly been focussing on the web, with React, TypeScript & NextJS
        my go to tech stack.
      </p>
      <p>On the side I am interested in all things crypto and web 3.</p>
      <p>
        {' '}
        My achievements include leading complex projects, co-founding startups,
        and winning top prized at hackathons like ETHGlobal. In an effort to
        give back and help others, I&apos;ve mentored over 20 aspiring
        engineers. I definitely would not be where I am today without the many
        mentors I have had, so hopefully I can pass that on the the next
        iteration of engineers.
      </p>
      <h3 className="text-green-400">Work Experience</h3>
      {jobsData.map((job) => (
        <Job key={job.company} jobDetails={job} />
      ))}
      <h3 className="text-green-400">Skills</h3>
      <p className="m-0">{skillsData.join(', ')}</p>
      <h3 className="text-green-400">Interests</h3>
      <p className="m-0">{interestsData.join(', ')}</p>
    </div>
  );
}

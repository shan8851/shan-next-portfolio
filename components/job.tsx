export interface JobDetails {
  company: string;
  title: string;
  date: string;
  description: string[];
}

interface JobProps {
  jobDetails: JobDetails;
}

export const Job = ({ jobDetails }: JobProps) => {
  const { company, title, date, description } = jobDetails;

  return (
    <div className="space-y-2 border-b border-border pb-4">
      <div className="flex justify-between items-center">
        <h4 className="text-purple font-semibold">{company}</h4>
        <p className="text-sm text-textSecondary">{date}</p>
      </div>
      <p className="text-base text-text">{title}</p>
      <ul className="list-disc list-inside space-y-1 text-textSecondary text-sm">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

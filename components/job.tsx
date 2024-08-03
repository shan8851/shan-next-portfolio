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
    <div className="mb-4">
      <div className="flex justify-between item-center">
        <h4 className="m-0 text-orange-400">{company}</h4>
        <p className="m-0 text-slate-400 font-light">{date}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="m-0">{title}</p>
      </div>
      <ul>
        {description.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

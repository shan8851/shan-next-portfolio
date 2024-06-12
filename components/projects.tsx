import React from 'react';


export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
}

const projectsData: ProjectProps[] = [
  {
    title: 'hooked-on-react',
    description: 'A collection of handy React hooks designed to accelerate development and enrich the user experience with less code and more functionality.',
    tags: ['React', 'Typescript', 'Hooks'],
    url: 'https://hooked-on-react.xyz/',
  },
  {
    title: "ReactifySVG",
    description: "Turn SVGs into React Components. Created with the T3 stack and a mysql database. Powered by SVGR. You can simply paste in any SVG and transform into a React component you can use in your projects. Updates coming such as live preveiw, customisation and more.",
    tags: ["T3", "NextJS", "SVGR"],
    url: "https://www.reactifysvg.xyz/",
  },
    {
    title: "CryptoCoffee",
    description: "Inspired by the 'Buy me a coffee' model, CryptoCoffee allows you to send a small amount of Eth to me as a tip. Built with NextJS and Solidity.",
    tags: ["NextJS", "Solidity", "wagmi"],
    url: "https://cryptocoffee.vercel.app/",
  },
    {
    title: "MAC-Insurance",
    description: "Insurance protocol to protect from ERC20 token from price loss. Built as part of small team for the Ethglobal hackathon. Mac Insurance project took first place for 'best use' and second place for the 'best app' categories.",
    tags: ["NextJS", "TheGraph", "Solidity"],
    url: "https://ethglobal.com/showcase/mac-insurance-r1g12",
  },
  {
    title: "TechLeap",
    description: "Newsletter aimed at aspiring devs looking to break into tech and get the most out of their early years. Currently not writing issues but it will be back.",
    url: "https://techleap.beehiiv.com/subscribe",
    tags: ["beehiiv", "mentoring", "writing"],
  },
  {
    title: "Rinkedry",
    description: "A Rinkeby faucet allowing devs to request and donate test Eth. My first blockchain project. I wrote the smart contract and paired with a NextJS frontend. Limits on withdrawing, extra test eth for those that have donated",
    tags: ["Solidity", "NextJS", "Web3"],
    url: "https://rinkedry.vercel.app/",
  },
  {
    title: "Moonturds",
    description: "Frontend minting site for NFT collection. Made use of hardhat and ethersJS.",
    tags: ["CRA", "ethersjs"],
    url: "https://www.moonturds.xyz/",
  },
];

const Project: React.FC<ProjectProps> = ({ title, description, tags, url }) => {
  return (
    <div className="flex flex-col">
      <a href={url} className="text-md text-green-500 hover:text-green-800 decoration-transparent w-fit">
        {`› ${title}`}
      </a>
      {tags && (
        <div className='flex gap-1 pl-6'>
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <span className="text-sm text-orange-400">{tag}</span>
              {index < tags.length - 1 && <span className="text-sm text-orange-400">, </span>}
            </React.Fragment>
          ))}
        </div>
      )}
      <p className="pl-6 m-0 text-md">
        {description}
      </p>
    </div>
  );
};




export const ProjectsPage: React.FC = ({ projectId }: {projectId?:any}) => {
  console.debug('projectId', projectId);
  return (
    <div className="flex flex-col gap-1 px-4">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        ))}
    </div>
  );
};


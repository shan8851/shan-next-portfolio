import { ProjectProps } from "@/components/projects";

export const projectsData: ProjectProps[] = [
  {
    title: '_seopSip',
    description:
      'A sepolia faucet allowing devs to request and donate test Eth. Smart contract was built, tested and deployed with Foundry - paired with a NextJS frontend with wagmi, tanstack query and Typescript. There are time limits for withdraws and a donator leaderboard',
    tags: ['Solidity', 'NextJS', 'Web3'],
    url: 'https://rinkedry.vercel.app/',
  },
  {
    title: 'hooked-on-react',
    description:
      'A collection of handy React hooks designed to accelerate development and enrich the user experience with less code and more functionality.',
    tags: ['React', 'Typescript', 'Hooks'],
    url: 'https://hooked-on-react.xyz/',
  },
  {
    title: 'ReactifySVG',
    description:
      'Turn SVGs into React Components. Created with the T3 stack and a mysql database. Powered by SVGR. You can simply paste in any SVG and transform into a React component you can use in your projects. Updates coming such as live preview, customisation and more.',
    tags: ['T3', 'NextJS', 'SVGR'],
    url: 'https://www.reactifysvg.xyz/',
  },
  {
    title: 'CryptoCoffee',
    description:
      "Inspired by the 'Buy me a coffee' model, CryptoCoffee allows you to send a small amount of Eth to me as a tip. Built with NextJS and Solidity.",
    tags: ['NextJS', 'Solidity', 'wagmi'],
    url: 'https://cryptocoffee.vercel.app/',
  },
  {
    title: 'MAC-Insurance',
    description:
      "Insurance protocol to protect from ERC20 token from price loss. Built as part of small team for the Ethglobal hackathon. Mac Insurance project took first place for 'best use' and second place for the 'best app' categories.",
    tags: ['NextJS', 'TheGraph', 'Solidity'],
    url: 'https://ethglobal.com/showcase/mac-insurance-r1g12',
  },
  {
    title: 'Moonturds',
    description:
      'Frontend minting site for NFT collection. Made use of hardhat and ethersJS.',
    tags: ['CRA', 'ethersjs'],
    url: 'https://www.moonturds.xyz/',
  },
];

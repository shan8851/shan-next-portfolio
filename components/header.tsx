import Image from 'next/image';

export const Header = () => (
  <div className="flex flex-col py-4 gap-2">
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full h-10 w-10 m-0"
        src="/punk.png"
        alt="avatar"
        height={100}
        width={100}
      />
      <h1 className="m-0 text-3xl font-extrabold">shan8851.eth</h1>
    </div>
    <div className="flex flex-col">
      <p className="m-0 text-lg font-bold ">
        <span className="line-through">JavaScript</span> <span className="text-green-500">Typescript</span> Junkie, lifelong learner
      </p>
      <p className="m-0 text-md font-light">
        Experienced software developer and mentor passionate about open source,
        web3 and helping people break into tech.
      </p>
    </div>
  </div>
);

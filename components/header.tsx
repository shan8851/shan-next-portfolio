import Image from "next/image";

export const Header = () => (
  <div className="flex flex-col py-4">
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full h-10 w-10"
        src="/punk.png"
        alt="avatar"
        height={100}
        width={100}
      />
      <h1 className="m-0 font-extrabold">shan8851.eth ᵍᵐ</h1>
    </div>
    <p className="m-0 text-xl font-bold mb-2">
      <span className="line-through">Javascript</span>{' '}
      <span className="text-green-400">Typescript</span> Junkie, lifelong
      learner
    </p>
    <p className="m-0 text-md font-light">
      Endlessly curious experienced software engineer passionate about privacy,
      decentralisation, open source software and onchain governance.
    </p>
  </div>
);

import Image from "next/image";

export const Header = () => (
  <div className="flex flex-col py-4">
    <div className="flex items-center gap-2">
      <Image className="rounded-full h-10 w-10"  src="/punk.png" alt="avatar" height={100} width={100} />
      <h1 className="m-0">Shan8851</h1>
    </div>
    <p className="m-0 text-xl font-bold mb-2">Javascript Junkie, lifelong learner</p>
    <p className="m-0 text-lg font-light">Experienced software developer and mentor passionate about open source, web3 and helping people break into tech.</p>
  </div>
)

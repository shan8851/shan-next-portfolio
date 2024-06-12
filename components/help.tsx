'use client'

export const CommandList = ({ verbose }: { verbose?: boolean }) => {
  return (
  <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <span className="text-green-500">commands</span>
      {verbose && (
        <span>-
          List of all commands available with more information about each
          command
        </span>
      )}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-green-500">latest</span>
      {verbose && (
        <span>-
          View my most recent article
        </span>
      )}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-green-500">clear</span>
      {verbose && <span>- Clear the console</span>}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-green-500">mentoring</span>
      {verbose && (
        <span>- Find out how you can work with me</span>
      )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">projects</span>
        {verbose && <span>- List of my projects</span>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">now</span>
        {verbose && (
          <span>-
            Check out what I am up to right now
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">articles</span>
        {verbose && (
          <span>-
            A bunch of short blogs/articles, mostly focussed on the tech
            industry
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">github</span>
        {verbose && (
          <span>- View my github profile</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">twitter</span>
        {verbose && (
          <span>- View my twitter profile</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">x</span>
        {verbose && <span>- View my x profile</span>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">linkedin</span>
        {verbose && (
          <span>- View my linkedin profile</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">email</span>
        {verbose && <span>- Shoot me a message</span>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">call</span>
        {verbose && <span>- book a call with me</span>}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">light</span>
        {verbose && (
          <span>- switch to light theme</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-500">dark</span>
        {verbose && <span>- switch to dark theme</span>}
      </div>
    </div>
)
};

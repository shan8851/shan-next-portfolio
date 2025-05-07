import Image from 'next/image';

interface PostHeaderProps {
  title: string;
  description?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-8 flex flex-col items-start gap-6">
      <Image
        src="/og.png"
        alt="Shan8851 avatar"
        width={1080}
        height={1080}
        className="rounded-xl border border-border"
      />
      <div>
        <h1 className="text-3xl font-bold text-green leading-tight tracking-tight mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-textSecondary leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

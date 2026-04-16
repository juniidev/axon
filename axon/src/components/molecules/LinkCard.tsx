import { BentoCard } from '../atoms/BentoCard';

type Props = {
  title: string;
  url: string;
};

export const LinkCard = ({ title, url }: Props) => {
  return (
    <BentoCard>
      <a
        rel="noreferrer"
        href={url}
        target="_blank"
        className="flex flex-col justify-between h-full"
      >
        <span className="text-lg font-semibold">{title}</span>

        <span className="text-sm text-neutral-400">{url}</span>
      </a>
    </BentoCard>
  );
};

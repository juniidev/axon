import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const BentoCard = ({ children, className }: Props) => {
  return (
    <div
      className={`
        bg-neutral-900/80
        border border-neutral-800
        rounded-2xl
        shadow-lg
        p-4
        overflow-hidden
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
};
import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BentoLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">{children}</div>
    </main>
  );
};

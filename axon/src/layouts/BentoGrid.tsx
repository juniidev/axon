import {type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const BentoGrid = ({ children }: Props) => {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      auto-rows-[150px] 
      gap-4
    ">
      {children}
    </div>
  );
};
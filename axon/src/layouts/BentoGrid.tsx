import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

export const BentoGrid = ({ children }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-3 
  auto-rows-[180px] 
  gap-5
"
    >
      {children}
    </motion.div>
  );
};

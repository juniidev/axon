import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
};

export const BentoCard = ({ children, className }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        bg-neutral-900
        rounded-2xl
        shadow-md
        p-4
        transition
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
};

export const BentoCard = ({ children, className }: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      className={`
  bg-neutral-900/80
  backdrop-blur
  border border-neutral-800
  rounded-2xl
  shadow-lg
  p-4
  transition
  ${className}
`}
    >
      {children}
    </motion.div>
  );
};

"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"div">;

const MotionDiv = ({ children, ...args }: Props) => {
  return (
    <motion.div className="w-fit h-fit " {...args}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;

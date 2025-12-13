import { motion } from "framer-motion";
import { ReactNode } from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-primary-600 dark:text-white"
    : "text-gray-600 dark:text-gray-400";

  return (
    <button onClick={selectTab} className="flex flex-col items-start">
      <span
        className={`mr-3 font-semibold transition-colors duration-200 hover:text-primary-600 dark:hover:text-white ${buttonClasses}`}
      >
        {children}
      </span>
      <motion.div
        initial="default"
        animate={active ? "active" : "default"}
        variants={variants}
        transition={{ duration: 0.3 }}
        className="h-1 bg-primary-600 dark:bg-primary-500 mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;

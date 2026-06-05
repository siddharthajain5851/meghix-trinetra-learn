"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Sparkles,
} from "lucide-react";

interface Props {
  title: string;
  progress: number;
  icon_name: string;
}

const icons = {
  Code,
  Rocket,
  FileCode,
  Sparkles,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {
  const Icon =
    icons[icon_name as keyof typeof icons] || Code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
    >
      <Icon className="w-6 h-6 mb-4" />

      <h3 className="font-semibold mb-4">
        {title}
      </h3>

      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%`}}
          className="h-2
          bg-blue-500"
          /></div>
          <p className="mt-3 text-sm
          text-zinc-400">
            {progress}% Complete
          </p>
          </motion.article>
  );
}
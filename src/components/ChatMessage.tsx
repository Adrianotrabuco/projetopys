import { motion } from "framer-motion";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
}

export const ChatMessage = ({ message, isAi }: ChatMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isAi ? "justify-start" : "justify-end"} mb-4`}
    >
      <div
        className={`max-w-[80%] p-4 rounded-2xl ${
          isAi
            ? "bg-white/80 text-lime-700 rounded-tl-sm"
            : "bg-primary text-slate-100 rounded-tr-sm"
        } shadow-sm`}
      >
        <p className="text-lg">{message}</p>
      </div>
    </motion.div>
  );
};

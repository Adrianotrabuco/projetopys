import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface EndScreenProps {
  OnRestart: () => void;
}

export const EndScreen = ({ OnRestart }: EndScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto px-6 text-center space-x-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Obrigado por Compartilhar
      </h2>
      <p className="text-xl text-gray-600">
        Lembre-se de que você não está sozinho. Cuide-se
      </p>
      <Button
        onClick={OnRestart}
        size="lg"
        className="text-lg px-8 py-6 rounded-full"
      >
        Voltar ao Início
      </Button>
    </motion.div>
  );
};
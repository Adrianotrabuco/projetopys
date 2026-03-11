import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto px-6 text-center space-x-8"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        Bem-Vindo ao seu espaço de apoio emocional
      </h1>
      <p className="text-xl text-gray-600">
        Um lugar seguro para compartilhar seus pensamentos.
      </p>
      <Button
        onClick={onStart}
        size="lg"
        className="text-lg px-8 py-6 rounded-full"
      >
        Iniciar a Conversa
      </Button>
    </motion.div>
  );
};

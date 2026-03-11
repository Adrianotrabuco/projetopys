import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">

        {/* Título */}
        <h1 className="text-5xl font-bold text-red-500 mb-4">
          Erro 404
        </h1>

        {/* Texto */}
        <p className="text-lg text-gray-700 mb-6">
          A página que você está tentando acessar não existe.
        </p>

        {/* Botão verde */}
        <Button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white">
          <Link to="/">Voltar para Home</Link>
        </Button>

      </div>
    </div>
  );
};

export default NotFound;
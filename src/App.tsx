import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      {/* rota 404 */}
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";
import HomePage from "./pages/homePage";
import Pokemon from "./pages/pokemon";
import { More } from "./pages/more";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

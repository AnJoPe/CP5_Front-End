import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Receita from "./pages/Receita/Receita";
import Categoria from "./pages/Categoria/Categoria";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col h-screen'>
          <main className='grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/categoria/:categoria' element={<Categoria />} />
              <Route path='/receita/:link' element={<Receita />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

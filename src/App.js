import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Error from "./pages/Erro";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/blog/" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<Blogpost />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

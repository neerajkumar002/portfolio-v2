import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

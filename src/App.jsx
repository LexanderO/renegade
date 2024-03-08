import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-blackbean">
        <Hero />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;

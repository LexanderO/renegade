import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="z-0 bg-blackbean">
        <Hero />
      </div>
      <div className="bg-grey">
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;

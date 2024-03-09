import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blackbean mb-14">
        <Hero />
      </div>
      <div className="bg-grey">
        <About />
      </div>
      <Navbar />
      <div className="bg-blackbean">
      </div>
    </BrowserRouter>
  );
}

export default App;

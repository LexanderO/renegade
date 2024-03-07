import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-blackbean">
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;

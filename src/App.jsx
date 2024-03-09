import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About, Gallery } from "./components";

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
      <div className="mb-14">
        <Gallery />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, About, Gallery, Login,  Blog, Register } from "./components";

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
      <div className="bg-gradient-to-b from-grey to-burgundy">
        <Gallery />
      </div>
      <div className="bg-blackbean">
        <Login />
      </div>
      <div className="bg-gradient-to-b from-burgundy to-grey">
        <Blog />
      </div>
      <div className="bg-blackbean">
        <Register />
      </div>
    </BrowserRouter>
  );
}

export default App;

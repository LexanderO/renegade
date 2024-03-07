import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero/>
        <Navbar/>
      </BrowserRouter>
    </>
  );
}

export default App;

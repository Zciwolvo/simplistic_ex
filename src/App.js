import React, { useState } from "react";
import About from "./about";

import "./App.scss";
import Contact from "./contact";
import Footer from "./footer";
import Gallery from "./gallery";
import MainHeader from "./header";

function App() {
  const [cattegory, setCattegory] = useState(true);
  const [index, setIndex] = useState(0);
  const view = [Gallery, About, Contact];

  const Page = view[index];

  return (
    <div className="App">
      <MainHeader setCattegory={setCattegory} setIndex={setIndex} />
      <Page cattegory={cattegory} setCattegory={setCattegory} />
      <Footer />
    </div>
  );
}

export default App;

import { links } from "./data";
import { social } from "./data";
import { useState } from "react";
import { Navbar } from "./Navbar";

const App = () => {
  return (
    <>
      <main className="link-container">
        <Navbar links={links} socials={social} />
      </main>
    </>
  );
};
export default App;

import { links } from "./data";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { social } from "./data";
import { useState } from "react";
import { Navbar } from "./Navbar";

const App = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <>
      <main className="link-container">
        {showLinks && <Navbar links={links} socials={social} />}
      </main>
    </>
  );
};
export default App;

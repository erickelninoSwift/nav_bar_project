import { useState } from "react";
export const Navbar = ({ links, socials }) => {
  const [showList, setShowList] = useState(false);
  return (
    <ul>
      {links.map((link) => {
        return <li key={link.id}>{link.text}</li>;
      })}
    </ul>
  );
};

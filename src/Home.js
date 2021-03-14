import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const { openModal, openMenu } = useContext(AppContext);

  return (
    <main>
      <button className="sidebar-toggle" onClick={openMenu}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={openModal}>
        show Modal
      </button>
    </main>
  );
};

export default Home;

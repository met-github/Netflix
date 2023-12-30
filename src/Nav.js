import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  // const [show, handleShow] = useState(false);
  // useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //         if (window.scrollY > 100) {
  //             handleShow(true);
  //         } else handleShow(false);
  //     });
  //     return () => {
  //         window.removeEventListener("scroll");
  //     };
  // },[]);
  const [view, setView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setView(true);
      } else {
        setView(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${view && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avator logo"
      />
    </div>
  );
}

export default Nav;

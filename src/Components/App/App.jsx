import { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";

function App() {
  useEffect(() => {
    const btn = document.querySelector(".scroll-top");

    const toggle = () => {
      if (window.scrollY > 300) {
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
      } else {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
      }
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <div className="app">
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {" "}
        ↑{" "}
      </button>
      <AnimatedBackground />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

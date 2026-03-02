import { useEffect } from "react";
import gsap from "gsap";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  useEffect(() => {
    const container = document.getElementById("animated-bg");

    //   const colors = [
    //     "hsla(330, 70%, 80%, 0.25)",
    //     "hsla(260, 70%, 80%, 0.25)",
    //     "hsla(200, 70%, 80%, 0.25)",
    //     "hsla(160, 70%, 80%, 0.25)",
    //     "hsla(40, 80%, 80%, 0.25)",
    //     "hsla(55, 80%, 80%, 0.25)",
    //   ];

    //   for (let i = 0; i < 14; i++) {
    //     const square = document.createElement("div");
    //     square.classList.add("bg-square");
    //     container.appendChild(square);

    //     const size = Math.random() * 120 + 60;
    //     square.style.width = `${size}px`;
    //     square.style.height = `${size}px`;
    //     square.style.left = `${Math.random() * window.innerWidth}px`;
    //     square.style.top = `${Math.random() * window.innerHeight}px`;
    //     square.style.background =
    //       colors[Math.floor(Math.random() * colors.length)];

    //     gsap.to(square, {
    //       x: `+=${Math.random() * window.innerWidth - window.innerWidth / 2}`,
    //       y: `+=${Math.random() * window.innerHeight - window.innerHeight / 2}`,
    //       duration: Math.random() * 10 + 8,
    //       repeat: -1,
    //       yoyo: true,
    //       ease: "sine.inOut",
    //     });

    //     gsap.to(square, {
    //       backgroundColor: () =>
    //         colors[Math.floor(Math.random() * colors.length)],
    //       duration: Math.random() * 6 + 4,
    //       repeat: -1,
    //       yoyo: true,
    //       ease: "sine.inOut",
    //     });
    //   }

    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bg-bubble");
      container.appendChild(bubble);

      const size = Math.random() * 150 + 40;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * window.innerWidth}px`;
      bubble.style.top = `${Math.random() * window.innerHeight}px`;

      bubble.style.zIndex = Math.random() > 0.5 ? -1 : 0;

      gsap.to(bubble, {
        x: `+=${Math.random() * window.innerWidth - window.innerWidth / 2}`,
        y: `+=${Math.random() * window.innerHeight - window.innerHeight / 2}`,
        duration: Math.random() * 14 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(bubble, {
        scaleX: 1.05,
        scaleY: 0.95,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return <div id="animated-bg"></div>;
}

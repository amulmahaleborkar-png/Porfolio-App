import React, { useState, useEffect } from "react";

export default function HomeSection() {
  const greetings = ["Hello!", "नमस्ते", "¡Hola!", "Bonjour!"];
  const [text, setText] = useState("");            // currently displayed text
  const [index, setIndex] = useState(0);           // current greeting index
  const [isDeleting, setIsDeleting] = useState(false);
  const [animate, setAnimate] = useState(true);    // slide-up animation

  useEffect(() => {
    let typingSpeed = isDeleting ? 100 : 200;

    const timeout = setTimeout(() => {
      const fullText = greetings[index];

      // Type or delete letters
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      // Trigger slide animation when typing starts
      if (!isDeleting && text.length === 0) {
        setAnimate(true);
      }

      // Pause after full word typed
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // Move to next word after deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % greetings.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, greetings]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Pic/Back2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p
          className={`text-xl sm:text-2xl text-gray-200 h-10 transition-all duration-500 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {text}
          <span className="animate-pulse">, I am </span>
        </p>
        <h1 className="mt-0 text-7xl sm:text-9xl md:text-10xl font-extrabold text-white font-mona">
          Amul <br /> Borkar
          <br />
<div className="flex justify-center" >
<img
  src="/Pic/Profile.png"
  alt="Profile"
  className="mt-6 w-32 sm:w-40 md:w-48 lg:w-56 shadow-lg object-contain rounded-4xl"
/>

</div>
        </h1>
      </div>
      {/* Bottom Left Info */}


{/* Bottom Right Info */}
{/* Bottom Left Info */}
<div className="absolute bottom-20 sm:bottom-6 left-4 sm:left-6 md:bottom-8 md:left-8 text-white bg-black/40 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded shadow-lg font-syne text-sm sm:text-base md:text-lg w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[250px]">
  <p>Frontend Developer</p>
  <p>React | Tailwind | JS</p>
</div>

{/* Bottom Right Info */}
<div className="absolute bottom-20 sm:bottom-6 right-4 sm:right-6 md:bottom-8 md:right-8 text-white bg-black/40 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded shadow-lg font-syne text-sm sm:text-base md:text-lg w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[250px]">
  <p>Contact Me
  </p>
</div>


    </section>
  );
}

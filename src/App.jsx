import { useEffect, useState } from "react";
import ParticleBackground from "./Components/ParticleBackground";

function App() {
  const [tilt, setTilt] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const maxScroll =
      document.body.scrollHeight - window.innerHeight || 1;
    const progress = window.scrollY / maxScroll; // 0 → top, 1 → bottom

    // Map progress to a tilt angle between -8deg and +8deg
    const angle = (progress - 0.5) * 16;
    setTilt(angle);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load

  // Cursor glow effect
  const glow = document.querySelector(".cursor-glow");
  const moveGlow = (e) => {
    if (glow) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    }
  };
  window.addEventListener("mousemove", moveGlow);

  // Scroll reveal animations
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => observer.observe(el));

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("mousemove", moveGlow);
    observer.disconnect();
  };
}, []);

  return (
    <div className="page">
      <div className="cursor-glow"></div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Jellybean</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO – 3D placeholder for now */}
      <section className="hero">

  {/* 🌌 ADD THIS LINE */}
  <ParticleBackground />

  <div className="hero-3d">
  </div>
  
  <div className="hero-content">
    <p className="tag">Developer • Designer • Dreamer</p>
    
    <h1>Hi, I'm Trisha S</h1>
    <p className="subtitle">
      Computer Science student building scalable web and mobile applications with a focus on real-time systems.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="btn primary">
        View my work
      </a>
      <a href="#contact" className="btn ghost">
        Contact me
      </a>
    </div>
  </div>

</section>

      {/* ABOUT SECTION */}
      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <div className="about">
          <p className="about-text">
            I'm a Computer Science student passionate about building{" "}
            <span className="highlight">interactive</span> and{" "}
            <span className="highlight">real-time applications</span> across web and mobile platforms.  
            I enjoy working at the intersection of <span className="highlight">design</span> and{" "}
            <span className="highlight">engineering</span> ,creating systems that are not only functional, but intuitive and engaging.
          </p>

          <p className="about-text">
            During my experience at <span className="highlight">Dell</span>, I developed internal tools that improved workflow efficiency and automation, gaining exposure to real-world development practices and collaborative environments.  
            I also worked with <span className="highlight">COT Networks</span>, where I focused on building mobile and real-time applications, including <span className="highlight">WebRTC-based</span> video communication systems.
          </p>

          <p className="about-text">
            My projects reflect my interest in solving practical problems from <span className="highlight">AR-based indoor navigation</span> to <span className="highlight">peer-to-peer video systems</span>.  
            I'm particularly drawn to technologies that enable real-time interaction and immersive user experiences.
          </p>

          <p className="about-text">
            Currently, I'm focused on strengthening my <span className="highlight">full-stack development</span> skills and building applications that combine performance, usability, and thoughtful design.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects reveal">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <article className="project-card">
            <h3>Indoor Navigation (QR + AR)</h3>
            <p>
              Web app that uses QR codes, sensors, and AR-style directions to
              help people navigate indoor spaces.
            </p>
          </article>

          <article className="project-card">
            <h3>Bloop – Social Media App</h3>
            <p>
              A social platform with posts, profiles, and a chatbot, built with
              Node.js, MongoDB, and a custom frontend.
            </p>
          </article>

          <article className="project-card">
            <h3>P2P Video Calling (WebRTC)</h3>
            <p>
              Peer-to-peer video calling using WebRTC, STUN/TURN servers, and a
              Flutter-based interface.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>
          Want to collaborate or just say hi? Reach out to me on{" "}
          <strong>email</strong> or <strong>LinkedIn</strong>.
        </p>
        <div className="contact-links">
          <a href="mailto:youremail@example.com">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Trisha. </span>
      </footer>
    </div>
  );
}

export default App;

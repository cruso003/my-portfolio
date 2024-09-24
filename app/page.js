"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header>
        <a href="#" class="logo-holder">
          <div class="logo">H₃</div>
          <div class="logo-texts">Henrique</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="mailto:crusoehenrique3@gmail.com" class="button black">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Geitodyu Henrique Crusoe
              </h1>
              <p>
                A software engineer with a passion for creating beautiful,
                user-friendly, and efficient applications.
                <span>I am interested in a lot</span>
              </p>
              <div className="call-to-action">
                <a
                  href="./GeitodyuHenrique_Crusoe_Resume.pdf"
                  className="button black"
                >
                  {" "}
                  View Resume{" "}
                </a>
                <a href="mailto:crusoehenrique3@gmail.com" className="button white">
                  {" "}
                  Contact Me{" "}
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/cruso003">
                  <img src="./imgs/github.png" alt="Github" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/crusoehenrique">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/hero.jpg" alt="Henrique Crusoe" width="100%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/c.png" alt="C" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img
                src="./imgs/react-native.png"
                alt="React Native"
                width="128"
              />
              <img src="./imgs/flutter.png" alt="Flutter" width="128" />
              <img src="./imgs/nodejs.png" alt="Node.js" width="128" />
              <img src="./imgs/mongodb.png" alt="MongoDB" width="128" />
              <img src="./imgs/nextjs.png" alt="Next Js" width="128" />
              <img src="./imgs/github.png" alt="Github" width="128" />
              <img src="./imgs/linkedin.png" alt="LinkedIn" width="128" />
              <img src="./imgs/aws.png" alt="AWS" width="128" />
              <img src="./imgs/docker.png" alt="Docker" width="128" />
              <img src="./imgs/firebase.png" alt="Firebase" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/figma.png" alt="Figma" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/svelte.svg" alt="Svelte" width="128" />
              <img src="./imgs/typescript.png" alt="Typescript" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
              <img src="./imgs/postgresql.png" alt="Postgre" width="128" />

              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JavaScript" width="128" />
              <img src="./imgs/c.png" alt="C" width="128" />
              <img src="./imgs/react.png" alt="React" width="128" />
              <img
                src="./imgs/react-native.png"
                alt="React Native"
                width="128"
              />
              <img src="./imgs/flutter.png" alt="Flutter" width="128" />
              <img src="./imgs/nodejs.png" alt="Node.js" width="128" />
              <img src="./imgs/mongodb.png" alt="MongoDB" width="128" />
              <img src="./imgs/nextjs.png" alt="Next Js" width="128" />
              <img src="./imgs/github.png" alt="Github" width="128" />
              <img src="./imgs/linkedin.png" alt="LinkedIn" width="128" />
              <img src="./imgs/aws.png" alt="AWS" width="128" />
              <img src="./imgs/docker.png" alt="Docker" width="128" />
              <img src="./imgs/firebase.png" alt="Firebase" width="128" />
              <img src="./imgs/vscode.png" alt="VS Code" width="128" />
              <img src="./imgs/figma.png" alt="Figma" width="128" />
              <img src="./imgs/sass.png" alt="Sass" width="128" />
              <img src="./imgs/svelte.svg" alt="Svelte" width="128" />
              <img src="./imgs/typescript.png" alt="Typescript" width="128" />
              <img src="./imgs/python.png" alt="Python" width="128" />
              <img src="./imgs/postgresql.png" alt="Postgre" width="128" />
            </div>
          </div>
        </section>
        <section id="about" className="about container">
          <h2>
            <small>Get to Know Me</small>About Me
          </h2>
          <div className="about-blue">
            <div className="about-info">
              <p>
                Hi! I'm Geitodyu Henrique Crusoe, a passionate Software Engineer
                with a unique background in Civil Engineering. My journey began
                in 2022 when I founded an eCommerce startup, and since then,
                I've been driven by curiosity and the thrill of solving complex
                problems.
              </p>
              <p>
                I love working with JavaScript technologies, including React,
                React Native, and Node.js, and I'm also skilled in Flutter and
                Python. My civil engineering background gives me a unique
                perspective on problem-solving and project management.
              </p>
              <p>
                Currently, I'm working on a Smart Irrigation System as part of
                my Civil Engineering final year project, aiming to help farmers
                across Africa improve sustainable farming practices.
              </p>
              <p>
                When I'm not coding or designing structures, you can find me
                gaming, watching movies, or indulging in way too much food! I
                believe in continuous learning and helping others grow, which is
                why I'm excited to also contribute as a tutor at ALX Africa.
              </p>
            </div>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-icon">1</div>
                <div className="timeline-content">
                  <span className="timeline-date">2022</span>
                  <h3>Founded Phoenix Hub Liberia</h3>
                  <p>
                    Started an eCommerce startup from scratch with just 64
                    earbuds, turning it into a thriving business.
                  </p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-icon">2</div>
                <div className="timeline-content">
                  <span className="timeline-date">2023</span>
                  <h3>Joined ALX Africa</h3>
                  <p>
                    Completed a one-year Software Engineering program at ALX
                    Africa, developing key projects and sharpening my coding
                    skills.
                  </p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-icon">3</div>
                <div className="timeline-content">
                  <span className="timeline-date">2024</span>
                  <h3>Smart Irrigation System</h3>
                  <p>
                    Working on a Civil Engineering final year project aimed at
                    helping African farmers with sustainable irrigation
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills container">
          <h2>
            <small>My Expertise</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Sass</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Svelte</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Prisma ORM</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
              <h3>Mobile Development</h3>
              <ul>
                <li>React Native</li>
                <li>Flutter</li>
                <li>Android</li>
              </ul>
              <h3>DevOps</h3>
              <ul>
                <li>AWS</li>
                <li>Docker</li>
                <li>Jenkins</li>
                <li>CI/CD</li>
              </ul>
              <h3>Architectural (Civil Engineering)</h3>
              <ul>
                <li>AutoCAD</li>
                <li>Revit</li>
                <li>Structural Design</li>
                <li>Project Management</li>
                <li>Smart Irrigation Systems</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>Skill Proficiency</h3>
              <div className="skill-bar">
                <span className="skill-name">Frontend</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-name">Backend</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '96%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-name">Mobile Development</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-name">DevOps</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-bar">
                <span className="skill-name">Architectural</span>
                <div className="progress-bar">
                  <div className="progress" style={{width: '95%'}}></div>
                </div>
              </div>

              <h3>Soft Skills</h3>
              <ul className="soft-skills">
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Time Management</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/alx-tutor.jpeg"
                    alt="ALX Africa"
                    width="100%"
                  />
                  <figcaption>ALX Africa</figcaption>
                </div>
              </figure>
              <h3>Software Engineer Student & Peer Mentor</h3>
              <div>2023-present</div>
              <p>
                Developed several projects, including a custom shell in C, and
                led a team to build a multivendor eCommerce solution for our
                final project. Currently tutoring peers on various software
                engineering concepts.
              </p>
            </article>

            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/phl.png"
                    alt="Phoenix Hub Liberia Inc"
                    width="100%"
                  />
                  <figcaption>Phoenix Hub Liberia Inc</figcaption>
                </div>
              </figure>
              <h3>Founder & Lead Developer</h3>
              <div>2022-2023</div>
              <p>
                Founded and managed a multivendor eCommerce platform, growing
                the company from $405 in initial inventory to $6,000 in sales
                within one year. Led development of an Android app and managed
                delivery logistics.
              </p>
            </article>

            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/bh.jpg"
                    alt="Building Hope Through Home"
                    width="100%"
                  />
                  <figcaption>Building Hope Through Home</figcaption>
                </div>
              </figure>
              <h3>Architectural Draftsman & Project Supervisor</h3>
              <div>2020-2023</div>
              <p>
                Managed construction projects, provided architectural designs,
                and supervised on-site activities to ensure project completion
                within deadlines and standards.
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small>Previous</small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="https://lieas.vercel.app/" class="bento-item">
              <img src="./imgs/project1.png" alt="LIEAS" />
              <div className="project-info">
                <h3>LIEAS Website</h3>
                <p>Liberians in East Africa Summit Website</p>
                <span className="tech-stack">HTML • CSS • JavaScript</span>
              </div>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/nova-properties.jpeg" alt="Nova-Properties" />
              <div className="project-info">
                <h3>Nova-Properties</h3>
                <p>Real Estate Website</p>
                <span className="tech-stack">React • Express • MongoDB</span>
              </div>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/stepUp.jpg" alt="StepUp Mockup" />
              <div className="project-info">
                <h3>Step Up Sneaker App</h3>
                <p>Sneaker App</p>
                <span className="tech-stack">Flutter • RestApi • Timbu</span>
              </div>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/qcm.png" alt="Project 4" />
              <div className="project-info">
                <h3>Quick-Cart</h3>
                <p>Ecommerce Shopping App</p>
                <span className="tech-stack">React Native • Nodejs • MongoDB</span>
              </div>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bb.png" alt="bb" />
              <div className="project-info">
                <h3>Blessed Bales & Bundles</h3>
                <p>Brief description of Project 5</p>
                <span className="tech-stack">Nextjs • TypeScript • Strapi</span>
              </div>
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/mm.jpg" alt="qc" />
              <div className="project-info">
                <h3>Residential Home</h3>
                <p>Residential Home - Blueprint to Construction</p>
                <span className="tech-stack">
                  Revit • Twinmotion • Construction
                </span>
              </div>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Geitodyu Henrique Crusoe. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

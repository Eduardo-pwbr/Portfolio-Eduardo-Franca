import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Sistema de Tarefas",
    description:
      "Aplicação web para gerenciamento de tarefas com autenticação, integração com Firebase/Firestore e atualização em tempo real.",
    tech: ["React", "TypeScript", "Firebase", "Firestore"],
    github: "https://github.com/Eduardo-pwbr/Eduardopwbr-Tarefas",
  },
  {
    title: "Locadora Prime",
    description:
      "Projeto de aplicação para locadora desenvolvido para praticar arquitetura de interfaces, componentes reutilizáveis e integração com APIs.",
    tech: ["React", "JavaScript", "React Router", "API REST"],
    github: "https://github.com/Eduardo-pwbr/locadora-Prime",
  },
  {
    title: "Sistema de Chamados",
    description:
      "Interface para atendimento e acompanhamento de chamados, com navegação entre páginas e organização de componentes.",
    tech: ["React", "TypeScript", "Vite", "React Router"],
    github: "https://github.com/Eduardo-pwbr",
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript ES6+",
  "Next.js",
  "Node.js",
  "APIs REST",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "Firebase",
  "SQL",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#inicio" onClick={closeMenu}>
          EF<span>.</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>
          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#habilidades" onClick={closeMenu}>
            Habilidades
          </a>
          <a href="#projetos" onClick={closeMenu}>
            Projetos
          </a>
          <a href="#experiencia" onClick={closeMenu}>
            Experiência
          </a>
          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">Olá, eu sou Eduardo França</p>
            <h1>
              Desenvolvedor <span>Front-End</span> & Full Stack
            </h1>
            <p className="hero-text">
              Crio interfaces modernas, responsivas e funcionais utilizando
              React, TypeScript, JavaScript, Next.js e Node.js.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">
                Ver projetos <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href="#contato">
                Entrar em contato
              </a>
            </div>
            <div className="socials">
              <a
                href="https://github.com/Eduardo-pwbr"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/eduardo-franca-de-oliveira-rodrigues/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="code-card">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>{`const developer = {
  name: "Eduardo França",
  role: "Front-End / Full Stack",
  stack: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js"
  ],
  focus: "Web Development"
};`}</pre>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="section-heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Desenvolvimento com foco em soluções web.</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                Sou desenvolvedor com experiência em desenvolvimento web e
                formação em Tecnologia da Informação. Minha trajetória reúne
                desenvolvimento de interfaces, integração com APIs, banco de
                dados e criação de soluções para a web.
              </p>
              <p>
                Atualmente, venho aprofundando meus conhecimentos em React,
                TypeScript, Next.js, Node.js, APIs REST e arquitetura de
                aplicações modernas.
              </p>
              <a className="text-link" href="#contato">
                Vamos conversar <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="about-cards">
              <div className="mini-card">
                <Code2 />
                <strong>Front-End</strong>
                <span>Interfaces modernas e responsivas</span>
              </div>
              <div className="mini-card">
                <Server />
                <strong>Full Stack</strong>
                <span>APIs, Node.js e banco de dados</span>
              </div>
              <div className="mini-card">
                <Smartphone />
                <strong>Responsivo</strong>
                <span>Experiência em desktop e mobile</span>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="section muted">
          <div className="section-heading">
            <p className="eyebrow">Tecnologias</p>
            <h2>Ferramentas que utilizo.</h2>
          </div>
          <div className="skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="section-heading">
            <p className="eyebrow">Portfólio</p>
            <h2>Projetos em destaque.</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">
                    0{projects.indexOf(project) + 1}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub ${project.title}`}
                  >
                    <Github size={21} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section muted">
          <div className="section-heading">
            <p className="eyebrow">Experiência</p>
            <h2>Trajetória profissional.</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="period">Atual</span>
              <div>
                <h3>Desenvolvimento e aprimoramento Full Stack</h3>
                <p>
                  Tenho me dedicado a projetos pessoais para expandir minhas
                  habilidades Full Stack, explorando Next.js, Node.js e
                  Firebase, além de aprofundar o uso de React e TypeScript.
                  Aplico integração de APIs REST, formulários, validações e boas
                  práticas de versionamento com Git/GitHub. O objetivo é
                  construir aplicações modernas, responsivas e escaláveis, com
                  foco em performance e experiência do usuário.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="period">2023 — 2025</span>
              <div>
                <h3>Desenvolvedor Front-end — SENAI</h3>
                <p>
                  Desenvolvimento de interfaces web responsivas e modernas
                  utilizando React, TypeScript, JavaScript e Tailwind CSS,
                  aplicando componentização, reutilização de código,
                  acessibilidade e boas práticas de desenvolvimento. Experiência
                  em integração de APIs REST, versionamento com Git/GitHub.
                  Criação e manutenção de sites WordPress, com foco em
                  responsividade, performance e experiência do usuário.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="period">2020 — 2022</span>
              <div>
                <h3>Desenvolvedor Front-end — UBIK do Brasil Tecnologia</h3>
                <p>
                  Atuação com desenvolvimento e manutenção de aplicações web,
                  utilizando C#, ASP.NET MVC, SQL Server, HTML, CSS, JavaScript,
                  jQuery e Bootstrap, além de participação em projetos web e
                  WordPress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contact section">
          <p className="eyebrow">Contato</p>
          <h2>Vamos construir algo juntos?</h2>
          <p>
            Estou aberto a oportunidades em desenvolvimento Front-End e Full
            Stack.
          </p>
          <a
            className="button primary"
            href="mailto:eduardo.f.o.rodrigues@hotmail.com"
          >
            <Mail size={18} /> Enviar e-mail
          </a>
          <div className="contact-links">
            <a
              href="https://github.com/Eduardo-pwbr"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-franca-de-oliveira-rodrigues/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} Eduardo França de Oliveira Rodrigues
        </span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}
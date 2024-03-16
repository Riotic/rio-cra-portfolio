import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dark Dominion",
    img: "/DarkDominion.png",
    desc: "Dark dominion est un jeu réalisé sur Godot avec une api python disponible sur web, pc et mobile. Vous pouvez y jouer en solo sur itch.io à l'url suivante https://rio-clement.itch.io/dark-dominion.",
    github: "https://github.com/Riotic/ProjetPRO-CDA2",
  },
  {
    id: 2,
    title: "EzAdmin",
    img: "/bddCompare.png",
    desc: "BddCompare/EzAdmin est un site web réalisé en next.js avec un systéme complexe maitrisé fonctionnant avec du mongoDB et du postgresql. Il permet de simplifier la comparaison de base de données pour un utilisateur.",
    github: "https://github.com/Riotic/ProjetPRO-CDA2",
  },
  {
    id: 3,
    title: "Rio Portfolio",
    img: "/rioPortfolio.png",
    desc: "Portfolio réalisé avec vite react et framer motion. Il est responsive et permet de présenter mes projets et mes compétences en développement web.",
    github: "https://github.com/Riotic/rio-cra-portfolio",
  },
  {
    id: 4,
    title: "Chainsawman - A dream comes true",
    img: "/reze.jpg",
    desc: "En cours de développement, réalisation d'un jeu vidéo en unity 3D et C# pour l'école ETNA. Le jeu reprendra la trame de l'anime chainsawman",
    github: "none",
  },
];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              {item.github === "none" ? (
                <button disabled>On Hold</button>
              ) : (
                <button onClick={() => window.location.href = item.github}>Regarder sur Github</button>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="mes-projets" className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

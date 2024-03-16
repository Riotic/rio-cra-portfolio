import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};
  
const scrollToProject = () => {
    const contactSection = document.getElementById("mes-projets");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });


  return (
    <motion.div
        id="services"
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Services de créations
          <br /> de projets pour votre entreprise.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/etna-services.jpg" alt="" />
          <h1>
           Des Idées <motion.b whileHover={{color:"orange"}}> Uniques</motion.b> 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Pour votre</motion.b> Entreprise
          </h1>
          <button onClick={scrollToProject}>MES PROJETS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="servicesTitle">Conception graphique & webdesign</h2>
          <p>
                L&apos;un de mes objectifs principaux est de vous aider à trouver un design qui vous correspond.
                Je fais régulierement des veilles via le site awwwards et behance pour vous proposer des designs modernes et innovants.
          </p>
          <button onClick={scrollToContact}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="servicesTitle">Gestion de projets web</h2>
          <p>
                Je peux vous aider à gérer vos projets web en utilisant des outils comme Gitflow, figma ou github.
          </p>
          <button onClick={scrollToContact}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="servicesTitle">Développements spécifiques</h2>
          <p>
                Je dispose des compétences pour développer des sites web, des applications web et des applications mobiles adaptés à votre coeur de métier. 
          </p>
          <button onClick={scrollToContact}>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2 className="servicesTitle">Interfaces d&apos;administration</h2>
          <p>
                Je peux vous aider à développer des interfaces d&apos;administration qui aideront à la sécurité et la gestion de vos données/applications.
          </p>
          <button onClick={scrollToContact}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

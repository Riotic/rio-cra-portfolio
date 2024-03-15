import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/etna.jpg" alt="" />
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/rio-clement-57b29a20a">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/rio_is_drawing_a_bit/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCbG95LGkP2VBfnj8f7qWzGA">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://github.com/Riotic">
            <img src="/githublogo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

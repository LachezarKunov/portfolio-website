import { motion } from "framer-motion";
import "./ProjectCard.css";

function ProjectCard({ title, description, githubURL, demoURL, index }) {
  return (
    <>
      <motion.div
        className="card-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
        }}
      >
        <div className="card-text-container">
          <div className="card-title">{title}</div>
          <div className="card-description">{description}</div>
        </div>

        <div className="card-buttons">
          {demoURL && (
            <a href={demoURL} target="_blank">
              <button>Demo</button>
            </a>
          )}

          <a href={githubURL} target="_blank">
            <button>View Code</button>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectCard;

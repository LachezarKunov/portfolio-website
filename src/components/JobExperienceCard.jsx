import { motion } from "framer-motion";

import "./JobExperienceCard.css";

export default function JobExperienceCard({ title, description }) {
  return (
    <>
      <motion.div
        className="job-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
}

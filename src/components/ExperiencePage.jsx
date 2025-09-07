import { experience } from "../data/experience";
import JobExperienceCard from "./JobExperienceCard";

export default function ExperiencePage() {
  return (
    <>
      {experience.map((element) => (
        <JobExperienceCard
          title={element.title}
          description={element.description}
        />
      ))}
    </>
  );
}

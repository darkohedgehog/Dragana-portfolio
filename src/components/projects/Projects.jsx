import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title=""
            category=""
            image={workImgThree}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgOne}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgTwo}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title=""
            category=""
            image={workImgFour}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgSix}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgEight}
          />
          <ProjectsCard
            title=""
            category=""
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
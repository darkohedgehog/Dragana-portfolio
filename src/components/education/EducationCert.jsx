import Title from "../home/Title";
import {eduImgOne,
       eduImgTwo,
       eduImgThree,
       eduImgFour,
       eduImgFive,
       eduImgSix,
       eduImgSeven,
       eduImgEight       
       } from "../../assets";
import EducationCard from "./EducationCard";

const EducationCert = () => {
  return (
    <div>
      <Title title="My" subTitle="Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <EducationCard
            image={eduImgOne}
            title="September 2022"
            subTitle="Advanced DAX"
            category="Maven Analytics LLC"
          />
          <EducationCard
            image={eduImgTwo}
            title="September 2022"
            subTitle="Power BI Service"
            category="Maven Analytics LLC"
          />
          <EducationCard
            image={eduImgThree}
            title="September 2022"
            subTitle="Power BI Specialist"
            category="Maven Analytics LLC"
          />
          <EducationCard
            image={eduImgFour}
            title="September 2022"
            subTitle="Microsoft PL-300 Exam Prep"
            category="Maven Analytics LLC"
          />
        </div>
        <div className="px-6">
          <EducationCard
            image={eduImgFive}
            title="September 2022"
            subTitle="Excel Formulas & Functions"
            category="Maven Analytics LLC"
          />
          <EducationCard
            image={ eduImgSix}
            title="September 2022"
            subTitle="Excel Charts & Graphs"
            category="Maven Analytics LLC"
          />
          <EducationCard
            image={eduImgSeven}
            title="August 2023"
            subTitle="SAS Visual Data Mining and Machine Learning"
            category="SAS"
          />
          <EducationCard
            image={eduImgEight}
            title="January 2015 - June 2016"
            subTitle="Talent Management Programme"
            category="IEDC"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationCert;
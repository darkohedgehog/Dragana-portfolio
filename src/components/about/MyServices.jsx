import { BsBank } from "react-icons/bs";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { SiAntdesign } from "react-icons/si";
import { SiQlik } from "react-icons/si";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<SiQlik />}
        title="Power BI"
        subTitle="Proficient in creating interactive visualizations and analyzing data to make informed business decisions."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Business Development Analyst"
        subTitle="Development of a strategic plan for a new company within the group."
      />
      <ServicesCard
        icons={<LiaTruckLoadingSolid />}
        title="Supply Chain Analyst"
        subTitle="Responsible for data collection and extraction, turning data into information useful for
        the company and customer."
      />
      <ServicesCard
        icons={<BsBank />}
        title="Mass Segment Development Specialist"
        subTitle="Preparation and analysis of KPIs for employees in branches..."
      />
    </div>
  );
};

export default MyServices;
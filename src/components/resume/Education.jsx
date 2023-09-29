import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Development and analysis of logistics services"
          subTitle="Nelt CO, Belgrade"
          des="Responsible for calculation of logistics costs for new customers, creating reports used for KPIs monitoring , in Power BI tool. Analysis and monitoring of logistics performance execution for LSP clients. Analysis of the efficiency and cost of logistics operations for LSP clients"
        />
        <ResumeCard
          badge="2021 - 2022"
          title="Business Analytics and Reporting Manager"
          subTitle="Last Mile Logistika, Belgrade"
          des="Financial data collection, analysis, and report creation. Development and monitoring of KPIs. Analyze KPIs and make propositions to their optimization. Budget preparation. Business opportunity evaluation, management analytical support..."
        />
        <ResumeCard
          badge="2018 - 2021"
          title="Supply Chain Analyst Team Leader"
          subTitle="Geodis SCO, Belgrade"
          des="Responsible for data collection and extraction, turning data into information useful for
          the company and customer.Participation in project team in charge of the new setup of Global KPIs for British Petroleum. Responsible for validation and accuracy of Global 11KPIs, 2nd and 3rd layer KPIs. Set up and alignment of Vendor and Carrier Management reporting for each region in
          which the client owns the platforms..."
        />
        <ResumeCard
          badge="July 2018 – December 2018"
          title="Mass Segment Development Specialist"
          subTitle="Banca Intesa, Belgrade"
          des="Preparation and analysis of KPIs for employees in branches. Performing data analytics in order to determine market trends, customer preferences
          and other information that can be used to make business decisions and marketing
          campaigns. Based on performed analyses creating presentations and overviews for upper
          management. Teamwork on large scale sales campaigns. Preparing analytics, defining target groups
          and communication towards them. Cross department cooperation with CRM, Marketing
          and Multi-channel departments."
        />
        <ResumeCard
          badge="2016 - 2018"
          title="Business Development Manager"
          subTitle="City Express doo Member of Austrian Post Group, Belgrade"
          des="Responsible for data collection and extraction, turning data into information useful for
          the company and customer.Participation in project team in charge of the new setup of Global KPIs for British Petroleum. Responsible for validation and accuracy of Global 11KPIs, 2nd and 3rd layer KPIs. Set up and alignment of Vendor and Carrier Management reporting for each region in
          which the client owns the platforms..."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2002 - 2007"
          title="University of Belgrade, Faculty of Transport and Traffic Engineering,
          Master’s degree in Logistics"
          subTitle="Belgrade"
          des=""
        />
        <ResumeCard
          badge="2015 - 2016"
          title="IEDC - Bled School of Management (Austrian Post Talent Management Programme)"
          subTitle="Slovenia"
          des=""
        />
        <ResumeCard
          badge="2022"
          title="Advanced DAX for Microsoft Power BI Desktop"
          subTitle="Udemy"
          des=""
        />
      </div>
    </div>
  );
};

export default Education;
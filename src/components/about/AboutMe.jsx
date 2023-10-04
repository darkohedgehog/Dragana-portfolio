
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! My name is Dragana Živić</h2>
          <p className="text-base leading-6 ">
          Experienced Supply Chain Analyst with a demonstrated history of working in the logistics and supply chain industry. Skilled in Customer Relationship Management (CRM), Contact Centers, Warehouse Operations, Supply Chain Management, and Logistics Management. I graduated from Faculty of Transport and Traffic Engineering and IEDC - Bled School of Management. 
          </p>
          
          <p className="text-base leading-6 ">
          I possess a positive and adaptable attitude towards work, thrive under pressure, maintain precision and an analytical approach to tasks, and am always open to embracing new challenges that facilitate personal and professional growth.
          </p>
          <p className="text-base leading-6 ">
          My profile shines with a wide range of skills and experiences that could be beneficial for various business needs.
          </p>
          <p className="text-base leading-6 ">
          Proficient in creating interactive visualizations analyzing data in order to support business decisions
          </p>
          
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Experience:</span>
            Over 15 years
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Serbia
          </li>
          <li className="aboutRightLi">
            
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Belgrade, Serbia
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
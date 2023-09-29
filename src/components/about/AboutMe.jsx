
const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I am Dragana Živić</h2>
          <p className="text-base leading-6 ">
          Graduate traffic engineer from Serbia, Belgrade. I have over 14 years of experience in various fields, which has enriched my professional profile. 
          </p>
          
          <p className="text-base leading-6 ">
          In addition to my extensive professional experience, I hold a Master`s degree in Logistics and have obtained certificates in management and leadership. I possess a positive and adaptable attitude towards work, thrive under pressure, maintain precision and an analytical approach to tasks, and am always open to embracing new challenges that facilitate personal and professional growth.
          </p>
          <p className="text-base leading-6 ">
          My profile shines with a wide range of skills and experiences that could be beneficial for various business needs.
          </p>
          
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Experience:</span>
            Over 14 years
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
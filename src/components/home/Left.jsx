import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/work/CV Dragana Zivic.pdf";
import { bannerImg } from "../../assets/index";


const Left = () => {
  const [text] = useTypewriter({
    words: ["MSC in Logistic", "Business Development Analyst", "Supply Chain Analyst"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Dragana Živić</h1>
          <p className="text-base text-emerald-400 tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            
            <a 
            href="https://www.linkedin.com/in/dragana-zivic-09114294/"
            target="blank"
            className="hover:text-emerald-400 duration-300 cursor-pointer text-xl">
             <FaLinkedin />
            </a>
           
            <a
            href="https://www.facebook.com/profile.php?id=1244166286"
            target="blank"
            className="hover:text-emerald-400 duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </a>
            <a
            href="https://www.instagram.com/zivic.draganaaa/"
            target="blank"
            className="hover:text-emerald-400 duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </a>
            
            <a
            href="mailto:zivic.dragana@gmail.com"
            className="hover:text-emerald-400 duration-300 cursor-pointer text-xl">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-emerald-400 duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a
            href="mailto:zivic.dragana@gmail.com" 
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-emerald-400 duration-300">
            Send Email <FiSend />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
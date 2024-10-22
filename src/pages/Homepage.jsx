import { Link } from "react-router-dom";


export default function Homepage() {


  return (
    <div className={`relative flex flex-col items-center justify-center gap-16 p-6
    bg-[linear-gradient(45deg,rgba(36,90,97,0.1),rgba(0,19,34,.5)),url("../../public/background.jpg")]
    dark:bg-[linear-gradient(45deg,rgba(22,26,60,0.7),rgba(0,19,34,.5)),url("../../public/storm.jpg")]
    bg-cover bg-no-repeat  w-full h-[90vh]`} >

      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl tracking-wide text-center font-light leading-tight w-full min-[1091px]:w-10/12" >We let you know if you gotta take the umbrella with you!</h1>

      {/* <img src="../../public/arrow.png" alt="arrow" className="absolute w-28 top-[53%] left-[30%] min-[1150px]:left-[33%] rotate-[85deg]" /> */}

      <button className=" text-white bg-[#eb5e28] " >
        <Link to="/dashboard" className="block px-5 py-3" >Check the weather</Link>
      </button>

    </div>
  )
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Works() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  let PROJECT = [
    {
      dev: "React.js Developer",
      ProjectName: "Scoccer",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://w7.pngwing.com/pngs/109/983/png-transparent-soccer-logo-football-icon-team-logo-thumbnail.png"
    },
    
    {
      dev: "React.js Developer",
      ProjectName: "Money Manager",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png",
    },
    {
      dev: "React.js Developer",
      ProjectName: "Animation form",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://logopond.com/logos/236f1c5892e8e9cd6a7ddba40be7c780.png",

    },
    {
      dev: "React.js Developer",
      ProjectName: "Travel-Webpage",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://websitedemos.net/tourism-04/wp-content/uploads/sites/344/2019/12/logo-mobile.png",

    },
    {
      dev: "React.js Developer",
      ProjectName: "Bootstrap",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",

    },
  ];
  
  return (
    <div>
      <div className="work xl:mx-60 mx-20 mt-16">
        <font className="text-secondary">My work</font>
        <h1 className="text-white text-[40px] font-bold">Projects.</h1>

        <div className="main-project flex flex-row lg:justify-center justify-start">
          <div className="project-left hidden lg:block">

        {
          PROJECT.map((e,i)=>{
            return i % 2 === 0 ? <div className="l-1 border p-5 mt-10 bg-[#1B1733] relative rounded">
            <h1 className="font-bold text-[20px]">{e.dev}</h1>
            <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
            <div
              className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
              data-aos="fade-up"
            >
              <img
                className="h-[100%] w-[100%] hidden lg:block"
                src={e.url}
                alt=""
              />
            </div>
            <font className=" text-[10px] lg:text-[15px] text-white">
              {e.ProjectName}
            </font>
            <p className="text-[13px] text-gray-300 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              excepturi.
            </p>
            
          </div> :  <div className="l-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">{e.dev}</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                {e.ProjectName}
              </font>
              <p className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </p>
              
            </div>

          })
        }

            {/* <div className="l-1 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  className="h-[100%] w-[100%] hidden lg:block"
                  src="https://w7.pngwing.com/pngs/109/983/png-transparent-soccer-logo-football-icon-team-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Soccer
              </font>
              <li className="text-[13px] text-gray-300 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[13px] text-gray-300 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[13px] text-gray-300 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[13px] text-gray-300 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[13px] text-gray-300 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="l-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Money Manager{" "}
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="l-1 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://logopond.com/logos/236f1c5892e8e9cd6a7ddba40be7c780.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Animation form
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="l-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://websitedemos.net/tourism-04/wp-content/uploads/sites/344/2019/12/logo-mobile.png"
                  className="h-[100%] w-[100%] hidden lg:block p-1"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Travel-Webpage
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="l-1 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Bootstrap
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap is built with a mobile-first approach, making it easy
                to create responsive websites that adapt to different screen
                sizes (mobile, tablet, desktop) seamlessly.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap comes with a wide range of ready-to-use UI components,
                such as:
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap ensures your project looks consistent across all major
                browsers (Chrome, Firefox, Safari, Edge, etc.) by handling
                browser-specific quirks.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                While Bootstrap provides default styles, it’s highly
                customizable to suit your branding or unique project needs.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap has comprehensive documentation with clear examples
                for each component and utility class.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                If you want to develop a responsive, visually appealing website
                quickly, Bootstrap provides a reliable and efficient framework
                with a vast ecosystem and strong community backing.
              </li>
              </div> */}
            </div>
          <div className="project-logo flex justify-center relative rounded h-100% w-48 ">
            <div className="center-line h-[102%] w-1 bg-white absolute z-0"></div>
          </div>
          <div className="project-right">
          {
          PROJECT.map((e,i)=>{
            return i % 2 == 0 ? <div className="r-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
            <h1 className="font-bold text-[20px]">{e.dev}</h1>
            <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
            <div
              className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
              data-aos="fade-up"
            >
              <img
                className="h-[100%] w-[100%] hidden lg:block"
                src="https://w7.pngwing.com/pngs/109/983/png-transparent-soccer-logo-football-icon-team-logo-thumbnail.png"
                alt=""
              />
            </div>
            <font className=" text-[10px] lg:text-[15px] text-white">
              {e.ProjectName}
            </font>
            <p className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              excepturi.
            </p>
          
          </div> : <div className="r-2 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">{e.dev}</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                {e.ProjectName}
              </font>
              
              <p className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </p>
            </div>

          })
        }
            {/* <div className="r-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  className="h-[100%] w-[100%] hidden lg:block"
                  src="https://w7.pngwing.com/pngs/109/983/png-transparent-soccer-logo-football-icon-team-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Soccer
              </font>
              <li className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="r-2 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Money Manager{" "}
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="r-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#c0bfc9] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://logopond.com/logos/236f1c5892e8e9cd6a7ddba40be7c780.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Animation Form
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="r-2 border p-5 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://websitedemos.net/tourism-04/wp-content/uploads/sites/344/2019/12/logo-mobile.png"
                  className="h-[100%] w-[100%] hidden lg:block p-1"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Travel-Webpage
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </li>
            </div>

            <div className="r-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <h1 className="font-bold text-[20px]">React.js Developer</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div>
              <font className=" text-[10px] lg:text-[15px] text-white">
                Bootstrap
              </font>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap is built with a mobile-first approach, making it easy
                to create responsive websites that adapt to different screen
                sizes (mobile, tablet, desktop) seamlessly.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap comes with a wide range of ready-to-use UI components,
                such as:
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap ensures your project looks consistent across all major
                browsers (Chrome, Firefox, Safari, Edge, etc.) by handling
                browser-specific quirks.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                While Bootstrap provides default styles, it’s highly
                customizable to suit your branding or unique project needs.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Bootstrap has comprehensive documentation with clear examples
                for each component and utility class.
              </li>
              <li className="text-[10px] lg:text-[15px] text-secondary mt-5">
                If you want to develop a responsive, visually appealing website
                quickly, Bootstrap provides a reliable and efficient framework
                with a vast ecosystem and strong community backing.
              </li>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

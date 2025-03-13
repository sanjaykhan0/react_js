// eslint-disable-next-line no-unused-vars
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
      url:"https://w7.pngwing.com/pngs/109/983/png-transparent-soccer-logo-football-icon-team-logo-thumbnail.png",
      Links:"https://chatgpt.com/c/67480801-2574-800a-872b-068dc6c4ab31",
    },
    
    {
      dev: "React.js Developer",
      ProjectName: "Money Manager",
      info: "Budget Management: Users can add and track their total budget dynamically. Product Inventory: Supports adding products with name, price, and unique IDs. Interactive UI: Modern, responsive design with a calming medical theme. Real-Time Updates: Displays current budget and inventory updates instantly.Scalable Architecture: Built with reusable components and robust state management for future",
      url:"https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png",
      Links:"https://money-manager-a6ed6.web.app",
    },
    {
      dev: "React.js Developer",
      ProjectName: "Weather-Api",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://logopond.com/logos/236f1c5892e8e9cd6a7ddba40be7c780.png",
      Links:"",

    },
    {
      dev: "React.js Developer",
      ProjectName: "Travel-Webpage",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://websitedemos.net/tourism-04/wp-content/uploads/sites/344/2019/12/logo-mobile.png",
      Links:"",

    },
    {
      dev: "React.js Developer",
      ProjectName: "Bootstrap",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, excepturi.",
      url:"https://e7.pngegg.com/pngimages/439/345/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png",
      Links:"",

    },
  ];
  
  return (
    <div className="mb-12">
      <hr />
      <div className="work xl:mx-60 mx-20 mt-16">
        <font className="text-secondary">My work</font>
        <h1 className="text-white text-[40px] font-bold">Projects.</h1>

        <div className="main-project flex flex-row lg:justify-center justify-start">
          <div className="project-left hidden lg:block">

        {
          PROJECT.map((e,i)=>{
            return i % 2 === 0 ? <div key={i} className="l-1 border p-5 mt-10 bg-[#1B1733] relative rounded" data-aos="fade-right">
              <a href={e.Links}>
            <h1 className="font-bold text-[20px]">{e.dev}</h1>
            <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
            {/* <div className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded" data-aos="fade-up">
              <img
                className="h-[100%] w-[100%] hidden lg:block"
                src={e.url}
                alt=""
              />
            </div> */}
            <font className=" text-[10px] lg:text-[15px] text-white">
              {e.ProjectName}
            </font>
            <p className="text-[13px] text-gray-300 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              excepturi.
            </p>
            </a>
          </div> :  <div key={i} className="l-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded" >
            <a href={e.Links}>
              <h1 className="font-bold text-[20px]">{e.dev}</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 right-[-1%] rotate-45"></div>
              {/* <div
                className="h-10 w-10 bg-[#1B1733] absolute z-[2] border-2 right-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
                  className="h-[100%] w-[100%] hidden lg:block"
                  alt=""
                />
              </div> */}
              <font className=" text-[10px] lg:text-[15px] text-white">
                {e.ProjectName}
              </font>
              <p className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </p>
              </a>
            </div>

          })
        }

            
            </div>
          <div className="project-logo flex justify-center relative rounded h-100% w-48 ">
            <div className="center-line h-[102%] w-1 bg-white absolute z-0"></div>
          </div>
          <div className="project-right">
          {
          PROJECT.map((e,i)=>{
            return i % 2 == 0 ?  <div key={i} className="r-1 border p-5 lg:opacity-0 mt-10 bg-[#1B1733] relative rounded">
              <a href={e.Links}>
            <h1 className="font-bold text-[20px]">{e.dev}</h1>
            <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
            {/* <div
              className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
              data-aos="fade-up"
            >
              <img
                className="h-[100%] w-[100%] hidden lg:block"
                src={e.url}
                alt=""
              />
            </div> */}
            <font className=" text-[10px] lg:text-[15px] text-white">
              {e.ProjectName}
            </font>
            <p className="text-[10px] lg:text-[15px] text-gray-100 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              excepturi.
            </p>
            </a>
          </div> : <div key={i} className="r-2 border p-5 mt-10 bg-[#1B1733] relative rounded" data-aos="fade-left">
            <a href={e.Links}>
              <h1 className="font-bold text-[20px]">{e.dev}</h1>
              <div className="h-3 w-3 bg-[#1B1733] absolute z-[-1] border-2 left-[-1%] rotate-45"></div>
              {/* <div
                className="h-10 w-10 lg:bg-[#1B1733] absolute z-[2] lg:border-2 left-[-11%] top-9 rounded"
                data-aos="fade-up"
              >
                <img
                  src={e.url}
                  className="h-[100%] w-[100%] p-1 hidden lg:block"
                  alt=""
                />
              </div> */}
              <font className=" text-[10px] lg:text-[15px] text-white">
                {e.ProjectName}
              </font>
              
              <p className="text-[10px] lg:text-[15px] text-secondary mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                excepturi.
              </p>
              </a>
            </div>

          })
        }
            
          </div>
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
}

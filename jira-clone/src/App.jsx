import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { apifetch } from "./app/feature";

export default function App() {
  const [activeBoard, setActiveBoard] = useState("kanban");
  const [kanbanStyle, setKanbanStyle] = useState({ display: "block" });
  const [projectStyle, setprojectStyle] = useState({ display: "none" });

  const [companyName, setCompanyName] = useState("singularity 1.0");
  const [profile, setProfile] = useState([]);
  const [update, setupdate] = useState({ display: "none" });
  const [view, setview] = useState({ display: "block" });
  const [form, setform] = useState({ display: "none" });

  const [name,setname] = useState("")
  const [pass,setpass] = useState("")
  console.log(name,pass + "check in app jsx line 18")

  // const dispatch = useDispatch()

  const cardClasses = "bg-card p-4 rounded-lg shadow";
  const buttonClasses =
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md";
  const textClasses = "bg-white p-3 rounded-md mb-2 shadow";

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile((prevProfile) => [...prevProfile, { companyName }]);
    console.log([...profile, { companyName }]); // For debugging
  };

  const editform = () => {
    setupdate({ display: "block" });
    setview({ display: "none" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
  };
  

  return (
    <div>
      <div className="side-barh-[100vh] bg-[#0847A6] h-[100vh] w-[3%] hover:w-[10%] duration-[0.1s] py-2 absolute top-0 left-0 overflow-hidden ">
        <div className="sidebar bg-[#0847A6]   w-[100%] px-3  flex item-center flex-col">
          <div className="logo py-9">
            <img
              src="../public/Screenshot 2025-01-18 193836.png"
              className=" w-9"
              alt=""
            />
          </div>

          <div className="logo py-2 pl-2 flex items-center">
            <img
              src="../public/Screenshot 2025-01-19 111101.png"
              className="h-[20px] w-[20px]"
              alt=""
            />
            <h1 className="text-white text-[13px] opacity-[0.8] ml-5 font-bold text-nowrap">
              SEARCH ISSUES
            </h1>
          </div>

          <div className="logo py-2 pl-2 flex items-center" onClick={()=>setform({display:"block",background:"rgba(0, 0, 0, 0.251)"})}>
            <img
              src="../public/Screenshot 2025-01-19 111134.png"
              className="h-[20px] w-[20px]"
              alt=""
            />
            <h1 className="text-white text-[13px] opacity-[0.8] ml-5 font-bold text-nowrap">
              CREATE ISSUES
            </h1>
          </div>
        </div>
      </div>

      <aside className="h-[100vh] w-[12.5%] bg-[#F4F5F7] border ml-[3%] p-6 float-left">
        <div className="logo h-[10%] w-[100%] flex items-center">
          <img src="../public/logo.png" className="h-11 w-11" alt="" />
          <div className="logo-name px-2">
            <h3 className="font-bold text-gray-600">
              {" "}
              {profile.length > 0
                ? profile[profile.length - 1].companyName
                : "singularity 1.0"}
            </h3>
            <p className="text-[13px] font-semibold text-gray-500">
              Business project
            </p>
          </div>
        </div>

        <div
          className={`board h-[5%] w-full px-2 flex items-center  rounded cursor-pointer hover:bg-gray-200 ${
            activeBoard === "kanban" ? "bg-gray-200" : ""
          }`}
          onClick={() => {
            setActiveBoard("kanban");
            setKanbanStyle({ display: "block" });
            setprojectStyle({ display: "none" });
          }}
        >
          <img src="../public/board-logo.png" className="w-[15%]" alt="" />
          <h2
            className={`px-3 ${
              activeBoard === "kanban" ? "text-blue-600" : "text-black"
            }`}
          >
            Kanban Board
          </h2>
        </div>

        <div
          className={`board h-[5%] w-full px-2 flex items-center  rounded cursor-pointer hover:bg-gray-200 ${
            activeBoard === "settings" ? "bg-gray-200" : ""
          }`}
          onClick={() => {
            setActiveBoard("settings");
            setKanbanStyle({ display: "none" });
            setprojectStyle({ display: "block" });
          }}
        >
          <img src="../public/search icon.png" className="w-[14%]" alt="" />
          <h2
            className={`px-3 ${
              activeBoard === "settings" ? "text-blue-600" : "text-black"
            }`}
          >
            Project Settings
          </h2>
        </div>
        <br />
        <hr className="  border-gray-400" />
      </aside>

      <div
        className="div-kanban w-[99%] border flex justify-evenly "
        style={kanbanStyle}
      >
        <div className="kanban-board  w-[99%] h-[99vh] ">
          <div className="p-4 bg-background" style={view}>
            <div className="flex   flex-col mb-4">
              <p className="text-gray-500 font-semibold px-8">
                Project / singularity 1.0 / Kanban Board
              </p>
              <h1 className="text-2xl font-bold mb-7 px-8">Kanban board</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-border rounded-md p-2 mr-4 ml-8"
                />
                <button className={buttonClasses}>Only My Issues</button>
                <button className={buttonClasses}>Recently Updated</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className={`${cardClasses} bg-gray-50 px-8`}>
                <h2 className="font-semibold">BACKLOG 4</h2>
                <div className="mt-2">
                  <div className={textClasses} onClick={editform}>
                    <p>hello</p>
                    <div className="flex justify-between mt-2">
                      <span>⬆️</span>
                      <span>👤</span>
                    </div>
                  </div>
                  <div className={textClasses}>
                    <p>Click on an issue to see what's behind it.</p>
                    <div className="flex justify-between mt-2">
                      <span>⬆️</span>
                      <span>👤</span>
                    </div>
                  </div>
                  <div className={textClasses}>
                    <p>
                      Try dragging issues to different columns to transition
                      their status.
                    </p>
                    <div className="flex justify-between mt-2">
                      <span>⬆️</span>
                      <span>👤</span>
                    </div>
                  </div>
                  <div className={textClasses}>
                    <p>
                      You can use rich text with images in issue descriptions.
                    </p>
                    <div className="flex justify-between mt-2">
                      <span>⬆️</span>
                      <span>👤</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${cardClasses} bg-gray-50`}>
                <h2 className="font-semibold">SELECTED FOR DEVELOPMENT 2</h2>
                <div className="mt-2">
                  <div className={textClasses}>
                    <p>
                      Each issue can be assigned priority from lowest to
                      highest.
                    </p>
                    <div className="flex justify-between mt-2">
                      <span>⬇️</span>
                      <span>👤</span>
                    </div>
                  </div>
                  <div className={textClasses}>
                    <p>
                      Each issue has a single reporter but can have multiple
                      assignees.
                    </p>
                    <div className="flex justify-between mt-2">
                      <span>⬇️</span>
                      <span>👤</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${cardClasses} bg-gray-50`}>
                <h2 className="font-semibold">IN PROGRESS 2</h2>
                <div className="mt-2">
                  <div className={textClasses}>
                    <p>This is an issue of type: Task.</p>
                    <div className="flex justify-between mt-2">
                      <span>⬇️</span>
                      <span>👤</span>
                    </div>
                  </div>
                  <div className={textClasses}>
                    <p>
                      You can track how many hours were spent working on an
                      issue, and how many hours remain.
                    </p>
                    <div className="flex justify-between mt-2">
                      <span>⬇️</span>
                      <span>👤</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${cardClasses} bg-gray-50`}>
                <h2 className="font-semibold">DONE 1</h2>
                <div className="mt-2">
                  <div className={textClasses}>
                    <p>Try leaving a comment on this issue.</p>
                    <div className="flex justify-between mt-2">
                      <span>⬆️</span>
                      <span>👤</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="editform w-[100%] h-[100%] bg-slate-400 "
            style={update}
          ></div>
        </div>
      </div>

      <div className="project-form w-[84%]" style={projectStyle}>
        <div className="p-6 bg-card rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Project Details
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                id="project-name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                placeholder="singularity 1.0"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold hover:bg-blue-700 px-6 py-2 rounded-md w-full transition-all"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
      {/* form  */}

      <div className="form h-[100%] w-[100%]  absolute top-0 left-0  " style={form}>
        <button onClick={()=>setform({display:"none"})}>back</button>


              <form onSubmit={handleFormSubmit}>
              <input
  type="text"
  placeholder="name"
  onChange={(e) => setname(e.target.value)}
/>
<input
  type="text"
  placeholder="password"
  onChange={(e) => setpass(e.target.value)}
/>

              
                 <button type="submit">submit</button>
              </form>

      </div>
      {/* form end  */}
    </div>
  );
}

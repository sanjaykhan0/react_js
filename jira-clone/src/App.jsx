import React, { useState } from "react";

export default function App() {
  const [activeBoard, setActiveBoard] = useState("kanban");

  const cardClasses = "bg-card p-4 rounded-lg shadow";
  const buttonClasses =
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-md";
  const textClasses = "bg-white p-3 rounded-md mb-2 shadow";

  return (
    <div>
      <div className="sidebar bg-[#0847A6] h-[100vh] w-[3%] absolute top-0 left-0">
        <span className="w-full flex justify-center">
          <img
            src="../public/Screenshot 2025-01-18 193836.png"
            className="w-[85%] m-[50%]"
            alt=""
          />
        </span>

        <span className="w-full flex justify-center">
          <button className="w-[60%]">
            <img
              src="../public/Screenshot 2025-01-19 111101.png"
              className="w-[100%]"
              alt=""
            />
          </button>
        </span>
        <span className="w-full flex justify-center">
          <button className="w-[65%]">
            <img
              src="../public/Screenshot 2025-01-19 111134.png"
              className="w-[100%] mt-4"
              alt=""
            />
          </button>
        </span>
      </div>

      <aside className="h-[100vh] w-[12.5%] bg-[#F4F5F7] border ml-[3%] p-6 float-left">
        <div className="logo h-[10%] w-[100%] flex items-center">
          <img src="../public/logo.png" className="h-11 w-11" alt="" />
          <div className="logo-name px-2">
            <h3 className="font-bold text-gray-600">singularity 1.0</h3>
            <p className="text-[13px] font-semibold text-gray-500">
              Business project
            </p>
          </div>
        </div>

        <div
          className={`board h-[5%] w-full px-2 flex items-center  rounded cursor-pointer hover:bg-gray-200 ${
            activeBoard === "kanban" ? "bg-gray-200" : ""
          }`}
          onClick={() => setActiveBoard("kanban")}
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
          onClick={() => setActiveBoard("settings")}
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

     <div className="div w-[84%] border flex justify-center">
     <div className="kanban-board  w-[95%] h-[100vh] ">

        <div className="p-4 bg-background">
          <div className="flex   flex-col mb-4">
        <p className="text-gray-500 font-semibold">Project / singularity 1.0 / Kanban Board</p>
            <h1 className="text-2xl font-bold mb-7">Kanban board</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border border-border rounded-md p-2 mr-4"
              />
              <button className={buttonClasses}>Only My Issues</button>
              <button className={buttonClasses}>Recently Updated</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className={`${cardClasses} bg-gray-50`}>
              <h2 className="font-semibold">BACKLOG 4</h2>
              <div className="mt-2">
                <div className={textClasses}>
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
                    Try dragging issues to different columns to transition their
                    status.
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
                    Each issue can be assigned priority from lowest to highest.
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
                    You can track how many hours were spent working on an issue,
                    and how many hours remain.
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
      </div>
     </div>
    </div>
  );
}

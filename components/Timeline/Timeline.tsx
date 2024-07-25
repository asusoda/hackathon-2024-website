import React from "react";
import items from "./schedule";
import Reveal from "./Reveal";
import "../../styles/timeline.css";

export default function Timeline() {
  return (
    <>
      <h1 className="mt-36 mb-[-150px]  text-center">Hackathon Schedule</h1>
      <div className={"mt-28 flex items-center justify-center "}>
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent m-10 ">
          {items.map((item, index) =>
            item.key % 2 === 0 ? (
              <Reveal key={item.key} even>
                <div
                  className={"relative flex items-center justify-between md:justify-normal md:flex-row group is-active md:mt-10 mt-20 "}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#457f86]
           text-slate-500 group-[.is-active]:text-emerald-50 shrink-0 md:order-10 md:translate-x--2/3`}
                  />
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.2rem)] card-even  shadow-gray-900 shadow-lg p-2 m-4 rounded-2xl  ">
                    <div
                      className="h-full w-full bg-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50 shadow-lg shadow-slate-800 
 overflow-y-auto p-6"
                    >
                      {/* h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 border border-gray-100 */}

                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-semibold text-white md:pr-4 md:p-3 text-md md:text-lg">
                          {item.cardTitle}
                        </div>
                        <time className="font-caveat font-medium text-indigo-100 md:pl-5 text-xs md:text-sm">
                          {item.title}
                        </time>
                      </div>
                      <div className="text-slate-200 md:p-5 p-1 text-sm md:text-md">
                        {item.cardDetailedText}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ) : (
              <Reveal key={item.key}>
                <div
                  className={"relative flex items-center justify-between md:justify-normal md:flex-row-reverse group is-active md:mt-10 mt-20"}
                >
                  <div
                    className={"flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#457f86] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-10 md:translate-x--2/3 glassy-div"}
                  />
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.2rem)] card-odd p-2 m-4  rounded-2xl">
                    <div
                      className="h-full w-full glassy-div bg-clip-padding bg-opacity-50 shadow-lg shadow-slate-800 
 overflow-y-auto p-6"
                    >
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-semibold text-white md:pr-4 md:p-3 text-md md:text-lg">
                          {item.cardTitle}
                        </div>
                        <time className="font-caveat font-medium text-indigo-100 md:pl-5 pl-1 text-xs md:text-sm">
                          {item.title}
                        </time>
                      </div>
                      <div className="text-slate-200 md:p-5 p-1 text-sm md:text-md">
                        {item.cardDetailedText}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>
      </div>
    </>
  );
}

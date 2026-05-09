import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {LeftArrow} from "@/components/arrows/LeftArrow";
import {LeftArrowAlt} from "@/components/arrows/LeftArrowAlt";
export function Right() {
    return (
        <div className="parent h-full">
            <div className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1"}></div>
            <div className={"h-full w-full div2 flex flex-col items-center justify-center border-l-1"}></div>
            <div className={"h-full w-full div3 flex flex-col items-center justify-center border-t-1"}></div>

            <div onClick={() => go(DivEnum.RIGHT, DivEnum.CENTER)} className={"h-full w-full div4 flex flex-col items-center justify-center border-r-1 cursor-pointer"}>
                <LeftArrow/>
                <LeftArrowAlt/>
            </div>

            <div className={"h-full w-full div5 bg-white overflow-hidden relative p-6 md:p-20"}>
                <div className={"flex flex-col gap-8 md:gap-12 h-full"}>
                    <div className={"flex flex-col gap-2"}>
                        <h2 className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold"}>Selection</h2>
                        <h1 className={"text-black font-thin text-3xl md:text-6xl tracking-tighter"}>
                            FEATURED <span className={"font-black"}>PROJECTS</span>
                        </h1>
                        <div className={"h-[2px] w-16 md:w-24 bg-[#4CAF50] mt-2"}></div>
                    </div>

                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 overflow-y-auto pr-2 md:pr-0"}>
                        {/* Project 1 */}
                        <a href="https://danuskyne-masaje.cz" target="_blank" rel="noopener noreferrer" 
                           className={"group flex flex-col border border-neutral-100 p-6 md:p-8 transition-all hover:border-[#4CAF50] hover:shadow-2xl"}>
                            <span className={"text-[#4CAF50] font-mono text-xs mb-4"}>01.</span>
                            <h3 className={"text-xl md:text-2xl font-black tracking-tight mb-2 group-hover:translate-x-2 transition-transform"}>danuskyne-masaje.cz</h3>
                            <p className={"text-neutral-500 text-xs md:text-sm leading-relaxed mb-6"}>
                                Custom website for a massage therapy client. Focused on clean user experience, mobile responsiveness, and easy booking accessibility.
                            </p>
                            <span className={"mt-auto text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-[#4CAF50]"}>Visit Website &rarr;</span>
                        </a>

                        {/* Project 2 */}
                        <a href="https://odtahovka-michal.cz" target="_blank" rel="noopener noreferrer"
                           className={"group flex flex-col border border-neutral-100 p-6 md:p-8 transition-all hover:border-[#4CAF50] hover:shadow-2xl"}>
                            <span className={"text-[#4CAF50] font-mono text-xs mb-4"}>02.</span>
                            <h3 className={"text-xl md:text-2xl font-black tracking-tight mb-2 group-hover:translate-x-2 transition-transform"}>odtahovka-michal.cz</h3>
                            <p className={"text-neutral-500 text-xs md:text-sm leading-relaxed mb-6"}>
                                Comprehensive web solution for a towing service company. Integrated service listings and direct contact features for rapid response.
                            </p>
                            <span className={"mt-auto text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-[#4CAF50]"}>Visit Website &rarr;</span>
                        </a>
                    </div>
                </div>

                {/* Navigation Indicator / Initials Logo */}
                <div className={"absolute bottom-6 md:bottom-10 left-6 md:left-10 flex items-center gap-4"}>
                    <div className={"w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center font-black text-xs md:text-sm tracking-tighter"}>
                        APL
                    </div>
                    <div className={"text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 uppercase"}>
                        &copy; {new Date().getFullYear()} ADAM PAVEL LIPERT
                    </div>
                </div>

                {/* Page Indicator */}
                <div className={"absolute top-6 md:top-10 left-6 md:left-10 text-[10px] md:text-xs font-mono text-neutral-400"}>
                    02 / 05
                </div>
            </div>

            <div className={"h-full w-full empty"}></div>
            <div className={"h-full w-full empty2"}></div>
            <div className={"h-full w-full empty3"}></div>
            <div className={"h-full w-full empty4"}></div>
        </div>
    );
};
import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {BottomArrow} from "@/components/arrows/BottomArrow";
import {BottomArrowAlt} from "@/components/arrows/BottomArrowAlt";
export function Top() {
    return (
        <div className="parent h-full">
            <div className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1"}></div>
            <div className={"h-full w-full div2 flex flex-col items-center justify-center border-l-1"}></div>

            <div onClick={() => go(DivEnum.UP, DivEnum.CENTER)} className={"h-full w-full div3 flex flex-col items-center justify-center border-t-1 cursor-pointer"}>
                <BottomArrow/>
                <BottomArrowAlt/>
            </div>

            <div className={"h-full w-full div4 flex flex-col items-center justify-center border-r-1"}></div>

            <div className={"h-full w-full div5 bg-white overflow-hidden relative p-6 md:p-20"}>
                <div className={"flex flex-col gap-8 md:gap-12 h-full max-w-5xl"}>
                    <div className={"flex flex-col gap-2"}>
                        <h2 className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold"}>Journey</h2>
                        <h1 className={"text-black font-thin text-3xl md:text-6xl tracking-tighter"}>
                            PROFESSIONAL <span className={"font-black"}>TIMELINE</span>
                        </h1>
                        <div className={"h-[2px] w-16 md:w-24 bg-[#4CAF50] mt-2"}></div>
                    </div>

                    <div className={"flex flex-col gap-10 md:gap-16 overflow-y-auto pr-2 md:pr-0 pb-20 md:pb-0"}>
                        {/* Experience 1 */}
                        <div className={"relative pl-8 md:pl-12 border-l-2 border-neutral-100"}>
                            <div className={"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#4CAF50] border-4 border-white"}></div>
                            <div className={"flex flex-col gap-2"}>
                                <span className={"text-[10px] font-mono text-[#4CAF50] uppercase tracking-widest"}>Current</span>
                                <h3 className={"text-xl md:text-3xl font-black tracking-tight uppercase"}>Head of Electronics</h3>
                                <div className={"flex flex-wrap items-center gap-2 md:gap-3 text-neutral-500 font-bold text-[10px] md:text-sm uppercase tracking-wider"}>
                                    <span>FS TUL Racing</span>
                                    <span className={"hidden md:inline w-1 h-1 rounded-full bg-neutral-300"}></span>
                                    <span>Formula Student Team</span>
                                </div>
                                <p className={"text-neutral-500 mt-4 text-xs md:text-base leading-relaxed max-w-2xl"}>
                                    Leading the electronics department in the design and implementation of high-performance racing systems. Managing cross-functional integration and technical strategy for the FS TUL Racing vehicle.
                                </p>
                            </div>
                        </div>

                        {/* Experience 2 */}
                        <div className={"relative pl-8 md:pl-12 border-l-2 border-neutral-100"}>
                            <div className={"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-200 border-4 border-white"}></div>
                            <div className={"flex flex-col gap-2"}>
                                <span className={"text-[10px] font-mono text-neutral-300 uppercase tracking-widest"}>Past</span>
                                <h3 className={"text-xl md:text-3xl font-black tracking-tight uppercase"}>Software Dev &bull; DevOps &bull; PM</h3>
                                <div className={"flex flex-wrap items-center gap-2 md:gap-3 text-neutral-500 font-bold text-[10px] md:text-sm uppercase tracking-wider"}>
                                    <span>Private Software Company</span>
                                    <span className={"hidden md:inline w-1 h-1 rounded-full bg-neutral-300"}></span>
                                    <span>Full Lifecycle Development</span>
                                </div>
                                <p className={"text-neutral-500 mt-4 text-xs md:text-base leading-relaxed max-w-2xl"}>
                                    Contributed across the full development stack in a small team environment. Balanced roles in software engineering, infrastructure automation (DevOps), and product management to deliver integrated solutions.
                                </p>
                            </div>
                        </div>
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
                    04 / 05
                </div>
            </div>

            <div className={"h-full w-full empty"}></div>
            <div className={"h-full w-full empty2"}></div>
            <div className={"h-full w-full empty3"}></div>
            <div className={"h-full w-full empty4"}></div>
        </div>
    );
};
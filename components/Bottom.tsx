import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {TopArrow} from "@/components/arrows/TopArrow";
import {TopArrowAlt} from "@/components/arrows/TopArrowAlt";
export function Bottom() {
    return (
        <div className="parent h-full">
            <div onClick={() => go(DivEnum.DOWN, DivEnum.CENTER)} className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1 cursor-pointer"}>
                <TopArrow/>
                <TopArrowAlt/>
            </div>

            <div className={"h-full w-full div2 flex flex-col items-center justify-center border-l-1"}></div>
            <div className={"h-full w-full div3 flex flex-col items-center justify-center border-t-1"}></div>
            <div className={"h-full w-full div4 flex flex-col items-center justify-center border-r-1"}></div>

                <div className={"h-full w-full div5 bg-white overflow-hidden relative p-6 md:p-20"}>
                    <div className={"flex flex-col gap-8 md:gap-12 h-full max-w-4xl"}>
                        <div className={"flex flex-col gap-2"}>
                            <h2 className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold"}>Behind the Code</h2>
                            <h1 className={"text-black font-thin text-3xl md:text-6xl tracking-tighter"}>
                                ABOUT <span className={"font-black"}>ADAM</span>
                            </h1>
                            <div className={"h-[2px] w-16 md:w-24 bg-[#4CAF50] mt-2"}></div>
                        </div>

                        <div className={"flex flex-col gap-6 md:gap-10 overflow-y-auto pr-2 md:pr-0 pb-24 md:pb-0"}>
                            <div className={"flex flex-col gap-4"}>
                                <p className={"text-lg md:text-xl text-black leading-relaxed"}>
                                    I&apos;m Adam. IT student, electronics enthusiast, and the person on the Formula Student team who&apos;s responsible when electronics don&apos;t work.
                                </p>
                                <p className={"text-neutral-500 text-sm md:text-base leading-relaxed"}>
                                    When I&apos;m not doing that, I&apos;m playing badminton, gaming, or deep in a TV show rabbit hole. <span className={"text-black font-bold"}>Mr. Robot</span> is the best thing ever made, no debate.
                                </p>
                            </div>

                            <div className={"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4"}>
                                <div className={"flex flex-col gap-4"}>
                                    <h3 className={"text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"}>Interests</h3>
                                    <ul className={"flex flex-col gap-2 text-xs md:text-sm font-bold uppercase tracking-wider"}>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Automotive Engineering
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Embedded Systems
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Clean Architecture
                                        </li>
                                    </ul>
                                </div>

                                <div className={"flex flex-col gap-4"}>
                                    <h3 className={"text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"}>Hobbies</h3>
                                    <ul className={"flex flex-col gap-2 text-xs md:text-sm font-bold uppercase tracking-wider"}>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Badminton
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Gaming
                                        </li>
                                        <li className={"flex items-center gap-2"}>
                                            <span className={"w-1.5 h-1.5 bg-[#4CAF50]"}></span>
                                            Cinephile / TV Shows
                                        </li>
                                    </ul>
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
                        </div>                    </div>

                    {/* Page Indicator */}
                    <div className={"absolute top-6 md:top-10 left-6 md:left-10 text-[10px] md:text-xs font-mono text-neutral-400"}>
                        05 / 05
                    </div>
                </div>

            <div className={"h-full w-full empty"}></div>
            <div className={"h-full w-full empty2"}></div>
            <div className={"h-full w-full empty3"}></div>
            <div className={"h-full w-full empty4"}></div>
        </div>
    );
};
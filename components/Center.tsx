import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {RightArrow} from "@/components/arrows/RightArrow";
import {RightArrowAlt} from "@/components/arrows/RightArrowAlt";
import {LeftArrow} from "@/components/arrows/LeftArrow";
import {LeftArrowAlt} from "@/components/arrows/LeftArrowAlt";
import {BottomArrow} from "@/components/arrows/BottomArrow";
import {BottomArrowAlt} from "@/components/arrows/BottomArrowAlt";
import {TopArrow} from "@/components/arrows/TopArrow";
import {TopArrowAlt} from "@/components/arrows/TopArrowAlt";
import Image from "next/image";

export function Center() {

    return (
            <div className="parent h-full">
                <div onClick={() => go(DivEnum.CENTER, DivEnum.UP)} className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1 cursor-pointer"}>
                    <TopArrow/>
                    <TopArrowAlt/>
                </div>
                <div onClick={() => go(DivEnum.CENTER, DivEnum.RIGHT)} className={"h-full w-full  div2 flex flex-col items-center justify-center border-l-1 cursor-pointer"}>
                    <RightArrow/>
                    <RightArrowAlt/>

                </div>
                <div onClick={() => go(DivEnum.CENTER, DivEnum.DOWN)} className={"h-full w-full  div3 flex flex-col items-center justify-center border-t-1 cursor-pointer"}>
                    <BottomArrow/>
                    <BottomArrowAlt/>

                </div>
                <div onClick={() => go(DivEnum.CENTER, DivEnum.LEFT)} className={"h-full w-full  div4 flex flex-col items-center justify-center border-r-1 cursor-pointer"}>
                    <LeftArrow/>
                    <LeftArrowAlt/>

                </div>
                <div className={"h-full w-full div5 bg-white overflow-hidden relative flex flex-col md:block"}>
                    {/* Minimalist Background Detail */}
                    <div className={"absolute top-0 left-[10%] w-[1px] h-full bg-neutral-100 hidden md:block"}></div>
                    <div className={"absolute top-[20%] left-0 w-full h-[1px] bg-neutral-100 hidden md:block"}></div>

                    {/* Sophisticated Header Section */}
                    <div className={"relative md:absolute md:top-[25%] md:left-[15%] z-10 px-6 md:px-0 pt-12 md:pt-0"}>
                        <div className={"flex flex-col gap-0"}>
                            <h2 className={"text-neutral-400 text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-bold"}>Adam Pavel Lipert</h2>
                            <h1 className={"text-black font-thin text-4xl md:text-7xl tracking-tighter leading-none"}>
                                SOFTWARE <span className={"font-black"}>DEVELOPER</span>
                            </h1>
                            <div className={"h-[2px] w-16 md:w-24 bg-[#4CAF50] mt-6"}></div>
                        </div>
                    </div>

                    {/* Refined Info Section */}
                    <div className={"relative md:absolute md:bottom-[20%] md:left-[15%] z-10 flex flex-col gap-6 px-6 md:px-0 mt-12 md:mt-0"}>
                        <div className={"flex flex-col"}>
                            <span className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1 font-bold"}>Current Role</span>
                            <p className={"text-black font-medium text-base md:text-xl tracking-tight"}>
                                Head of Electronics <span className={"text-neutral-300 mx-2"}>—</span> FS TUL Racing
                            </p>
                        </div>
                        
                        <div className={"flex flex-col"}>
                            <span className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1 font-bold"}>Education</span>
                            <p className={"text-black font-medium text-base md:text-xl tracking-tight"}>
                                IT Student <span className={"text-neutral-300 mx-2"}>&bull;</span> Technical University of Liberec
                            </p>
                        </div>
                    </div>

                    {/* Image Section - Refined */}
                    <div className={"relative md:absolute md:right-0 md:top-0 w-full md:w-[33%] h-[350px] md:h-full z-20 border-t md:border-t-0 md:border-l-[1px] border-neutral-200 mt-auto md:mt-0"}>
                        <div className={"w-full h-full overflow-hidden relative grayscale"}>
                            <Image 
                                src={"/me.webp"} 
                                alt={"Adam Pavel Lipert"} 
                                fill
                                className={"object-cover"} 
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Navigation Indicator / Initials Logo */}
                    <div className={"absolute bottom-6 md:bottom-10 left-6 md:left-10 flex items-center gap-4 z-30"}>
                        <div className={"w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center font-black text-xs md:text-sm tracking-tighter"}>
                            APL
                        </div>
                        <div className={"text-[0.6rem] md:text-[0.7rem] font-bold tracking-[0.3em] md:tracking-[0.5em] text-neutral-400 uppercase"}>
                            &copy; {new Date().getFullYear()} ADAM PAVEL LIPERT
                        </div>
                    </div>

                    {/* Page Indicator */}
                    <div className={"absolute top-6 md:top-10 left-6 md:left-10 text-[10px] md:text-xs font-mono text-neutral-400"}>
                        01 / 05
                    </div>
                </div>

                <div className={"h-full w-full empty"}></div>
                <div className={"h-full w-full empty2"}></div>
                <div className={"h-full w-full empty3"}></div>
                <div className={"h-full w-full empty4"}></div>
            </div>
    );
};
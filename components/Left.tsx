import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {RightArrow} from "@/components/arrows/RightArrow";
import {RightArrowAlt} from "@/components/arrows/RightArrowAlt";
export function Left() {
    return (
        <div className="parent h-full">
            <div className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1"}></div>

            <div onClick={() => go(DivEnum.LEFT, DivEnum.CENTER)} className={"h-full w-full div2 flex flex-col items-center justify-center border-l-1 cursor-pointer"}>
                <RightArrow/>
                <RightArrowAlt/>
            </div>

            <div className={"h-full w-full div3 flex flex-col items-center justify-center border-t-1"}></div>
            <div className={"h-full w-full div4 flex flex-col items-center justify-center border-r-1"}></div>
            <div className={"h-full w-full div5 bg-white overflow-hidden relative p-6 md:p-20"}>
                <div className={"flex flex-col gap-8 md:gap-12 h-full max-w-4xl"}>
                    <div className={"flex flex-col gap-2"}>
                        <h2 className={"text-neutral-400 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold"}>Expertise</h2>
                        <h1 className={"text-black font-thin text-3xl md:text-6xl tracking-tighter"}>
                            TECH <span className={"font-black"}>STACK</span>
                        </h1>
                        <div className={"h-[2px] w-16 md:w-24 bg-[#4CAF50] mt-2"}></div>
                    </div>

                    <div className={"grid gap-6 md:gap-10 overflow-y-auto pr-2 md:pr-0 pb-20 md:pb-0"}>
                        {/* Languages */}
                        <div className={"flex flex-col gap-3 md:gap-4"}>
                            <h3 className={"text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"}>Languages</h3>
                            <div className={"flex flex-wrap gap-2 md:gap-3"}>
                                {["TypeScript", "JavaScript", "Python", "Java", "C++", "HTML/CSS"].map(skill => (
                                    <span key={skill} className={"px-3 py-1.5 md:px-4 md:py-2 border border-neutral-100 text-xs md:text-sm font-medium hover:border-[#4CAF50] transition-colors cursor-default"}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Frameworks */}
                        <div className={"flex flex-col gap-3 md:gap-4"}>
                            <h3 className={"text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"}>Frameworks & Tools</h3>
                            <div className={"flex flex-wrap gap-2 md:gap-3"}>
                                {["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Git", "PostgreSQL"].map(skill => (
                                    <span key={skill} className={"px-3 py-1.5 md:px-4 md:py-2 border border-neutral-100 text-xs md:text-sm font-medium hover:border-[#4CAF50] transition-colors cursor-default"}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* DevOps */}
                        <div className={"flex flex-col gap-3 md:gap-4"}>
                            <h3 className={"text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400"}>Infrastructure</h3>
                            <div className={"flex flex-wrap gap-2 md:gap-3"}>
                                {["Docker", "CI/CD", "AWS", "Linux", "Nginx"].map(skill => (
                                    <span key={skill} className={"px-3 py-1.5 md:px-4 md:py-2 border border-neutral-100 text-xs md:text-sm font-medium hover:border-[#4CAF50] transition-colors cursor-default"}>
                                        {skill}
                                    </span>
                                ))}
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
                    03 / 05
                </div>
            </div>

            <div className={"h-full w-full empty"}></div>
            <div className={"h-full w-full empty2"}></div>
            <div className={"h-full w-full empty3"}></div>
            <div className={"h-full w-full empty4"}></div>
        </div>
    );
};
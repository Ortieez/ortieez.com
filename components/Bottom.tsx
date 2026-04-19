import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";

export function Bottom() {
    return (
        <div className="parent h-full">
            <div className={"h-full w-full div1 flex flex-col items-center justify-center border-b-1"}>
                <button className={"cursor-pointer"} onClick={() => go(DivEnum.DOWN, DivEnum.CENTER)}><ArrowBigUp  strokeWidth={1}/></button>
            </div>

            <div className={"h-full w-full div2 flex flex-col items-center justify-center border-l-1"}></div>
            <div className={"h-full w-full div3 flex flex-col items-center justify-center border-t-1"}></div>
            <div className={"h-full w-full div4 flex flex-col items-center justify-center border-r-1"}></div>

            <div className={"h-full  w-full   div5 flex flex-col items-center justify-center"}>
                text
            </div>

            <div className={"h-full w-full empty border-b-1 border-r-1"}></div>
            <div className={"h-full w-full empty2 border-l-1 border-b-1"}></div>
            <div className={"h-full w-full empty3 border-l-1 border-t-1"}></div>
            <div className={"h-full w-full empty4 border-r-1 border-t-1"}></div>
        </div>
    );
};
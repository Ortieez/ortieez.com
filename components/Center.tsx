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
                <div className={"h-full  w-full div5 flex flex-row items-center justify-center"}>
                    <div className={"w-fit ml-32 mr-50 flex flex-col items-center justify-center"}>
                        <Image src={"/me.png"} alt={"Image of me"} className={"w-fit"} width={700} height={300}></Image>
                    </div>
                    <div className={"w-[80%]"}>
                        asdasd
                    </div>
                </div>

                <div className={"h-full w-full empty border-b-1 border-r-1"}></div>
                <div className={"h-full w-full empty2 border-l-1 border-b-1"}></div>
                <div className={"h-full w-full empty3 border-l-1 border-t-1"}></div>
                <div className={"h-full w-full empty4 border-r-1 border-t-1"}></div>
            </div>
    );
};
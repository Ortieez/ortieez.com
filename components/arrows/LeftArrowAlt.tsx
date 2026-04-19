import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function LeftArrowAlt() {
    return (
        <div>
            <Image src={"/left-arrow-alt.png"} className={"left-arrow-alt"} alt={"Left arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function BottomArrowAlt() {
    return (
        <div>
            <Image src={"/bottom-arrow-alt.png"} className={"bottom-arrow-alt"} alt={"Left arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
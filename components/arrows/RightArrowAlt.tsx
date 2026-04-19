import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function RightArrowAlt() {
    return (
        <div>
            <Image src={"/right-arrow-alt.png"} className={"right-arrow-alt"} alt={"Right arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
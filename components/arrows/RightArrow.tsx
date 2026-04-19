import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function RightArrow() {
    return (
        <div>
            <Image src={"/right-arrow.png"} className={"right-arrow"} alt={"Right arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
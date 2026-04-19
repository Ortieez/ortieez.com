import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function BottomArrow() {
    return (
        <div>
            <Image src={"/bottom-arrow.png"} className={"bottom-arrow"} alt={"Bottom arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
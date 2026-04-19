import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function TopArrowAlt() {
    return (
        <div>
            <Image src={"/top-arrow-alt.png"} className={"top-arrow-alt"} alt={"Top arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
import * as React from 'react';
import {DivEnum, go} from "@/utils/utils";
import {ArrowBigUp} from "lucide-react";
import Image from "next/image";

export function TopArrow() {
    return (
        <div>
            <Image src={"/top-arrow.png"} className={"top-arrow"} alt={"Top arrow"} width={50} height={50} loading={"eager"}></Image>
        </div>
    );
};
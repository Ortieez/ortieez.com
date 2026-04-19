"use client";

import {Top} from "@/components/Top";
import {Left} from "@/components/Left";
import {Center} from "@/components/Center";
import {Right} from "@/components/Right";
import {Bottom} from "@/components/Bottom";

export default function Home() {
  return (
      <div className="relative w-screen h-screen overflow-hidden bg-white">
          <div id="up"    className="absolute inset-0 transition-transform duration-500 -translate-y-full">
              <Top />
          </div>
          <div id="left"  className="absolute inset-0 transition-transform duration-500 -translate-x-full">
              <Left />
          </div>
          <div id="center" className="absolute inset-0 transition-transform duration-500">
              <Center />
          </div>
          <div id="right" className="absolute inset-0 transition-transform duration-500 translate-x-full">
              <Right />
          </div>
          <div id="down"  className="absolute inset-0 transition-transform duration-500 translate-y-full">
              <Bottom />
          </div>
      </div>
  );
}

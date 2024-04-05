'use client'

import Image from "next/image";
import t1 from '@/assets/t1.png'
import t2 from '@/assets/t2.png'
import t3 from '@/assets/t3.png'
import t4 from '@/assets/t4.png'

import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";

export default function Home() {
    const turtles = [
        t3,t4,t1,t2
    ];

    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }
      

    const [speeds, _] = useState(shuffle([1,2,3,4]));
    const [x, setX] = useState(null) 

    const windowWidth = useWindowWidth();

    return (
        <div className="flex items-center justify-center w-screen h-screen font-black text-red-500 bg-cover text-7xl bg-background">
            <div className="relative flex items-center justify-center w-full h-full">
                {turtles.map((turtle, index) => (
                    <div key={index} className="absolute left-0 w-32" style={{transform:`translateY(${100*index}px)`}}>
                        <Image src={turtle} alt={"turtle " + index} className="w-full"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
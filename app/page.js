'use client'

import Image from "next/image";
import t1 from '@/assets/t1.png'
import t2 from '@/assets/t2.png'
import t3 from '@/assets/t3.png'
import t4 from '@/assets/t4.png'

import { useWindowWidth } from "@react-hook/window-size";
import { useState, useEffect } from "react";

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
        return array
      }
      

    const speedVsPlace = {
        1: 1,
        1.2: 2,
        1.4: 3,
        1.6: 4
    }
    const [speeds, _] = useState(shuffle([1,1.2,1.4,1.6]));
    const [turtleEase, setTurtleEase] = useState([[Math.random(), Math.random(),Math.random(),Math.random()],[Math.random(), Math.random(),Math.random(),Math.random()],[Math.random(), Math.random(),Math.random(),Math.random()],[Math.random(), Math.random(),Math.random(),Math.random()]]);
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (started){
            setTimeout(() => {
                setFinished(true)
            }, 11000)
        }
    }, [started])

    const windowWidth = useWindowWidth();
    const [width, setWidth] = useState(0);

    const handleOnClick = (e) => {
        setStarted(true);
        setWidth(windowWidth)
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen font-black text-red-500 bg-cover text-7xl bg-background">
            <div className="relative flex items-center justify-center w-full h-full">
                {turtles.map((turtle, index) => (
                    <div key={index} className="absolute left-0 w-32" style={{transform:`translateY(${100*index}px)`}}>
                        <div className="flex w-full transition-all ease-race1" style={{transform: `translateX(${width-100}px)`, transitionDuration: `${speeds[index]*7000}ms`, transitionTimingFunction: `cubic-bezier(${turtleEase[index][0]}, ${turtleEase[index][1]},${turtleEase[index][2]},${turtleEase[index][3]})`}}>
                            <Image src={turtle} alt={"turtle " + index}/>
                            <h1 className={"-translate-x-48 opacity-0 " + (finished && 'opacity-100')}>{speedVsPlace[speeds[index]]}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"fixed top-0 left-0 flex items-center justify-center w-screen h-screen " + (started && 'hidden')}>
                <button className="px-8 py-4 text-xl text-black bg-green-300 rounded-xl" onClick={handleOnClick}>Press to Start</button>
            </div>
        </div>
    );
}
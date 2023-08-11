"use client"
import Image from "next/image"
import { useState } from "react"
export default function Content() {

    const [tabView, setTabView] = useState(0)
    return (
        <div className=" mx-32 ">
          {/* <h1 className="flex justify-center underline underline-offset-8 text-3xl my-10 font-extrabold">Projects</h1> */}
          {/* Options  */}
          <div className="flex p-5">
            <ul className="flex mx-auto border border-gray-500 rounded-xl hover:cursor-pointer " >
                <li className={`${tabView === 0 ? 'bg-white text-black' : 'hover:bg-white hover:text-black' }  rounded-s-lg border p-2 font-extrabold`} onClick={(e) => setTabView(0)}>Projects</li>
                <li className={`${tabView === 1 ? 'bg-white text-black' : 'hover:bg-white hover:text-black' } border-y p-2 font-extrabold`} onClick={() => setTabView(1)}>Experience</li>
                <li className={`${tabView === 2 ? 'bg-white text-black' : 'hover:bg-white hover:text-black' } rounded-e-lg border p-2 font-extrabold`} onClick={() => setTabView(2)}>Gallery</li>
                
            </ul>
          </div>
        <div className="xl:grid xl:grid-cols-2 justify-center gap-3">
            {
                [1,2,3,4,5].map(element => {
                    return (<div key={element} className=" flex mb-3 xl:mb-0 justify-between items-center p-3 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 hover:border hover:border-zinc-500 ">
                        <div>
                        <p className=" text-xl font-extrabold pb-2">Application {element}</p>
                        <p className="font-bold text-lg pb-1">Description</p>
                        <p className="leading-5">This application is for employee payroll management system.</p>
                        </div>
                       <Image className=" p-2 rounded-3xl"
                        src="/img.png"
                        height={100}
                        width={100}
                        quality={100}
                        layout="responsive"
                        alt="project image"
                       />
                    </div>)
                    
                    
                })
            }


        </div>
        </div>
    )
}
import Image from "next/image"
export default function Content() {

    return (
        <div className=" mx-32 ">
          {/* <h1 className="flex justify-center underline underline-offset-8 text-3xl my-10 font-extrabold">Projects</h1> */}
          {/* Options  */}
          <div className="flex p-2">
            <ul className="flex mx-auto border border-gray-500 rounded-xl hover:cursor-pointer " >
                <li className=" bg-white  rounded-s-lg border text-black p-2 font-extrabold  ">Projects</li>
                <li className=" hover:bg-white  hover:text-black border-y p-2 font-extrabold  ">Resume</li>
                <li className=" hover:bg-white rounded-e-lg border hover:text-black p-2 font-extrabold  ">Gallery</li>
                
            </ul>
          </div>
        <div className="xl:grid xl:grid-cols-2 justify-center gap-3">
            {
                [1,2,3,4,5].map(element => {
                    return (<div className="flex mb-3 xl:mb-0 justify-between items-center p-3 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
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
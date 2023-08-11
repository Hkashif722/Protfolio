import Image from "next/image"

export default function TopBanner() {
   
    return <div className="mx-32 mt-10 grid grid-cols-2 space-x-5 items-center">
        <div>
            <h1 className=" text-2xl weigth font-extrabold pb-5">&lt; Kashif Hussain /&gt;</h1>
            <div className=" ml-5">
                <p className=" text-xl font-bold pb-5">Software Engineer</p>
                <p className=" text-start text-lg">I love to build scalable application. 
                Proficient in multiple programming language.
                Design and build robust software solutions with precision, elevating business to new height.
                With a passion for coding and consistently deliver execptional results.
                </p>
        </div>
            
        </div>
        <div>
            <Image 
            className="p-5 object-contain mx-auto"
            src="/Subject.png"
            width={130}
            height={100}
            quality={100}  
            alt="Picture of the author"
            />
        </div>
        
    </div>
}
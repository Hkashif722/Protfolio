'use client'
import Image from "next/image"
import { ChangeEvent, FormEvent, HTMLInputTypeAttribute, useState } from "react"
export default function BottomBanner() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target 
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("check")
        console.log(formData)


    }

    return (
        <div className="mx-32 my-10  grid grid-cols-2">
            <Image 
            className="p-20 object-contain mx-auto"
            src="/contact4.png"
            width={500}
            height={300}
            quality={100} 
            objectFit= "contain"
            layout="responsive"
            alt="Picture of the author"
            />
            
            <div className="p-5 mt-24 ">
                <h1 className="ml-16 font-extrabold text-2xl mb-7">Get In Touch</h1>
                <div className="flex justify-center">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex items-start m-2 space-x-2 ">
                                <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-5  rounded-2xl"  
                                type="text"
                                placeholder="First Name" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                />
                            
                            
                                <input className=" placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-5 rounded-2xl" 
                                type="text"
                                placeholder="Last Name" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                />


                        </div>

                        

                        <div className="flex items-start m-2 space-x-2 ">
                            <input className=" placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-5 rounded-2xl"     
                            type="email"
                            placeholder="Email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                            <input className=" placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm px-5 rounded-2xl" 
                            type="number"
                            placeholder="Phone No." 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </div>  

                        <div className="flex items-start m-2 space-x-2 ">
                            <input className="w-full placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm rounded-2xl h-32 " 
                            type="text"
                            placeholder="Message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            />
                        </div>

                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
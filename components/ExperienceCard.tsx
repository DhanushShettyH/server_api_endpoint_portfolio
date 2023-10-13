
import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings';
import { urlFor } from '@/sanityclient';
type Props = {
    experience:Experience
}

export default function ExperienceCard({ experience}: Props) {
    return (
        <article className='flex flex-col h-[570px] md:mt-9 rounded-lg items-center space-y-7 flex-shrink-0 w-[430px] md:w-[450px] xl:w-[800px]  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[rgb(36,36,36)]' >
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=' rounded-full h-32 w-32 mx-auto xl:w-22 xl:h-22 object-cover object-center'
                src={urlFor(experience.companyImage).url()} alt="" />


            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-1xl mt-1'>{experience.companyname}</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used */}
                    {experience.technologies.map((technology,i)=>(
                        <img
                        key={i}
                        className='h-10 w-10 rounded-full'
                        // src={urlFor(experience.companyImage).url()}
                        src={urlFor(technology.image).url()}
                        alt=''
                         />
                    ))}

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere?"Present": new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 px-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#ffb64a]/80'>
                    {experience.points.map((point,i)=>(
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
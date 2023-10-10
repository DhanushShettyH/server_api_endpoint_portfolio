
import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings';
import { urlFor } from '@/sanityclient';
type Props = {
    experience:Experience
}

export default function ExperienceCard({ experience}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=' rounded-full h-32 w-32 mx-auto xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience.companyImage).url()} alt="" />


            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of Youtube</h4>
                <p className='font-bold text-2xl mt-1'>Youtube</p>
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
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point,i)=>(
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
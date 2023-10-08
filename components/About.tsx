'use client';
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({ }: Props) {
    return (
        // here in desktop display col and in mobile display rows
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                // animate only animate while refreshing
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{ once: true }}

                className=' mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
                src='/dhanush_pic.jpg'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7ABBA]/50'>little</span> background
                </h4>
                <p className='text-base '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque quod. Ex accusamus aut dolor porro, laboriosam nisi earum recusandae maxime, eum dolorem totam eveniet! Cupiditate quod voluptatum voluptas assumenda!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eaque quod. Ex accusamus aut dolor porro, laboriosam nisi earum recusandae maxime, eum dolorem totam eveniet! Cupiditate quod voluptatum voluptas assumenda!

                </p>
            </div>


        </motion.div>
    )
}
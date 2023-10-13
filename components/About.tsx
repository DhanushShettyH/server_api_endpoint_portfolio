'use client';
import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings';
import { urlFor } from '@/sanityclient';

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
    return (
        //flex-col means display child one by one column. md:flex-row desplay all child in single row for (md: medium device and above)
        // col                                           //row
        // |-------------|                  |-------------|  |-------------|
        // |    div      |                  |    div      |  |    div      |
        // |-------------|                  |-------------|  |-------------|
        // |-------------|
        // |    div      |
        // |-------------|


        // mx-auto give even margin in x
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto md:pb-20 items-center'>
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

                className='mb-10 md:mb-0 flex-shrink-0 w-56 h-56 mt-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
                src={urlFor(pageInfo?.profilePic).url()}
            />

            <div className='space-y-10 px-0 md:px-10 overflow-y-scroll md:overflow-y-hidden scrollbar-thin scrollbar-track-gray-500 scrollbar-thumb-[#ffb64a]/80'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#ffb64a]/50'>little</span> background
                </h4>
                <p className='text-base '>
                    {pageInfo.backgroundInformation}
                </p>
            </div>


        </motion.div>
    )
}
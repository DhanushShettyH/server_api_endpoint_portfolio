import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanityclient";
type Props = {
    projects: Project[];
};

export default function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
                Projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ffb64a]/80">
                {/* Projects */}
                {projects.map((project, i) => (
                    <div
                        className="w-screen relative h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-evenly mx-auto my-auto p-20 md:p-44"
                        key={project._id}
                    >
                        <motion.img
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            src={urlFor(project.image).url()}
                            className="h-[250px] w-auto mb-10  "
                            alt=""
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#adb563] ">
                                    case study {i + 1} of {projects.length} :
                                </span>{" "}
                                {project.title}
                            </h4>

                            <div className="flex items-center space-x-2 justify-center">
                                {project.technologies.map((technology) => (
                                    <img
                                        className="h-5 w-5"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>


                            <div className="text-lg text-center md:text-left overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#adb563]">
                                <p className="h-[200px]">
                                    {project.summary}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 "></div>
        </motion.div>
    );
}

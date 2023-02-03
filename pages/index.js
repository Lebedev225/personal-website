import React from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import headshot from "../public/headshot-transparent.png";
import stock from "../public/stock.png";
import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Andrej Bosanac</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/brand-logo.jpg" />
            </Head>
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen">
                    <nav className="py-3 mb-3 flex justify-between md:mb-4 md:py-4">
                        <h1 className="text-xl text-gray-800 dark:text-gray-200 font-bold">
                            Welcome
                        </h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="cursor-pointer text-2xl text-gray-800 dark:text-gray-200"
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                    href="https://personal-website123214531.s3.us-west-2.amazonaws.com/Andrej+Bosanac+Resume.pdf"
                                    download
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium">
                            Andrej Bosanac
                        </h2>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
                            Software Developer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
                            Welcome to my personal website! Here, you'll find
                            information about me, my background, and my
                            interests. I'm excited to share my experiences and
                            connect with like-minded individuals. Thanks for
                            visiting!
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-8 py-1 text-gray-600 md:py-3 lg:py-3">
                        <a href="https://www.linkedin.com/in/abosanac/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://github.com/Lebedev225">
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-5 overflow-hidden ">
                        <Image
                            src={headshot}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1 text-gray-800 dark:text-teal-600">
                            Portfolio
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus veritatis molestias, explicabo illo
                            aspernatur ducimus dicta totam possimus eligendi
                            voluptatem alias repudiandae voluptate incidunt iste
                            itaque ullam optio facilis quidem, deserunt odio
                            amet libero nemo adipisci! Cum quae repudiandae,
                            soluta voluptate ut reprehenderit, est optio
                            eligendi, iure dolor numquam ex?
                        </p>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quas repellendus harum dolore nobis eveniet
                            recusandae laborum quidem facere beatae rerum.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={stock}
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                responsive
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={stock}
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                responsive
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={stock}
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                responsive
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

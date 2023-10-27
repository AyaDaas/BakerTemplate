import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { BsTwitter } from 'react-icons/bs';
function Footer() {
    return (
        <div>
            <div className="bg-black p-7   ">
                <div className="flex py-9 flex-col items-center">
                    <div className="w-44 h-44 inline-block wow  animate__zoomIn  animate__animated animate__delay-1s  flex justify-center items-center">
                        <img src="../../public/assets/logo.png" alt="Logo" />
                    </div>                            </div>

                <br />
                <div className="flex justify-around text-center text-white items-center">
                    <div className="md:w-1/4  w-1/2">
                        <ul className="mb-0 text-white list-none">
                            HeadLine
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className="dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/4  w-1/2">
                        <ul className="mb-0 text-white list-none">
                            HeadLine
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className="dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/4  w-1/2">
                        <ul className="mb-0 text-white list-none">
                            HeadLine
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link 1</a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className="dark:text-neutral-200"
                                >Link 2</a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link 3</a
                                >
                            </li>
                        </ul>


                    </div>
                    <div className="md:w-1/4  w-1/2">
                        <ul className="mb-0 text-white list-none">
                            HeadLine
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className="dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                            <li className="my-2">
                                <a href="#!" className=" dark:text-neutral-200"
                                >Link </a
                                >
                            </li>
                        </ul>                               </div>



                </div>



                <br /> <br /><br />
                <div
                    className="   flex   justify-center text-center text-stone-400 items-center  ">
                    <h4 className="text-3xl mx-3">
                        <FaFacebookF />
                    </h4>
                    <h4 className="text-3xl mx-3">

                        <AiFillInstagram />
                    </h4>

                    <h4 className="text-3xl mx-3">

                        <BsTwitter />
                    </h4>


                </div>



            </div>
            <div
                className="w-full bg-stone-500 p-5   text-center text-white   ">
                © 2023 Copyright

            </div>

        </div>
    )
}

export default Footer
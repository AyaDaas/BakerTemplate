import { useEffect, useState } from "react"
import CardComponent from "../component/content/CardComponent"
import FlexTwo from "../component/content/FlexTwo"
import PhotoHalfCircle from "../component/content/PhotoHalfCircle"
import Button from "../component/core/Button"
import Gallery from "../component/content/Gallery"
import axios from 'axios'
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import { BsTwitter } from 'react-icons/bs';

function LayoutPage() {
    const [data2, setData2] = useState([])
    useEffect(() => {
        axios.get(' https://jsonplaceholder.typicode.com/users')
            .then(res => { setData2(res.data); console.log(data2) })
            .catch(err => console.log(err))
    }, [])
    const [data, setData] = useState([
        { img: '../../public/assets/cartoon1.png', title: 'Baked Fresh Daily', desc: 'Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft' },
        { img: '../../public/assets/cartoon2.png', title: 'Great Value', desc: 'With the most competitive prices on the market we are able to deliver great value without compromising on taste' },
        { img: '../../public/assets/cartoon3.png', title: 'Institutions', desc: 'We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow' },
        { img: '../../public/assets/cartoon5.png', title: 'Delivery To Your Door', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
        { img: '../../public/assets/cartoon4.png', title: 'No Order Too Large', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' }
    ])


    const [data1, setData1] = useState([
        { img: '../../public/assets/bread1.png', title: 'CROISSANT', desc: 'Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft' },
        { img: '../../public/assets/bread3.png', title: 'BROWNIES', desc: 'With the most competitive prices on the market we are able to deliver great value without compromising on taste' },
        { img: '../../public/assets/bread2.png', title: 'CINNAMON BUN', desc: 'We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow' },
        { img: '../../public/assets/bread6.png', title: 'TURKISH BAGELS', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
        { img: '../../public/assets/bread7.png', title: 'DOUGHNUTS', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' },
        { img: '../../public/assets/bread3.png', title: 'TARTS', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' },
        { img: '../../public/assets/bread1.png', title: 'SHORTBREAD', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' },
        { img: '../../public/assets/bread2.png', title: 'COOKIES', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' }

    ])
    const [images, setImages] = useState([
        '../../public/assets/bread5.png',
        '../../public/assets/bread4.png',
        '../../public/assets/bread8.png',
        '../../public/assets/bread9.png'

    ])


    const [data3, setData3] = useState([
        { photo: '../../public/assets/bread5.png', title: 'Breads', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.        ' },
        { photo: '../../public/assets/bread2.png', title: 'Сookies', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.        ' },
        { photo: '../../public/assets/bread6.png', title: 'Pastries', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.        ' },

    ])
    return (
        <div className="bg-gray-50  ">
            <FlexTwo>
                <div className="text-center wow animate__animated animate__flipInX  animate__delay-1s  flex flex-col md:mx-0 mx-12  md:py-24 py-9 items-center md:items-center">
                    <span className="leading-loose text-gray-600 tracking-wider text-sm">FRESH BREAD & BAKED GOODS</span>
                    <h2 className="lg:text-6xl text-4xl font-bold my-4">Baked fresh daily</h2>
                    <div className="text-gray-600 my-4">
                        <p className="leading-loose">254 W 27ST ST, NEW YORK, NY 10011</p>
                        <p className="leading-loose">(212) 123-4567</p>
                        <p className=" leading-loose">
                            Monday - Wednesday 9am - 7pm
                            <br />
                            Thursday - Saturday 9am - 8pm
                            <br />
                            Sunday 9am - 6pm
                        </p>
                    </div>
                    <br />
                    <Button label="view products"></Button>
                </div>

                <div>
                    <PhotoHalfCircle className="rounded-l-full  wow  animate__animated animate__slideInRight animate__delay-1s" photo="../../public/assets/baker2.png"></PhotoHalfCircle>
                </div>
            </FlexTwo >
            <br /><br />            <br /><br />

            <h3 className="md:text-5xl text-2xl text-black wow  animate__animated animate__rollIn animate__delay-1s text-center font-bold mx-20">We bake fresh, handmade bread, pastries and cakes every day
            </h3>
            <br /><br />            <br /><br />
            <div className="mx-6">
                <div className=" flex flex-wrap ">
                    {data.map((item, index) => (
                        <div key={index} className=" w-full  md:w-1/2 lg:w-1/5  wow  animate__animated animate__fadeInDownBig animate__delay-1s  text-center ">
                            <CardComponent classPhoto={'lg:w-12 w-10  '} photo={item.img} desc={item.desc} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>


            <br /><br />
            <h3 className="md:text-6xl wow  animate__animated animate__rotateIn text-5xl text-black text-center font-bold mx-20">   Our Bread</h3>
            <p className="text-center wow  animate__rubberBand  animate__animated   text-2xl mx-20 mt-4">A values-driven bakery</p>
            <br /><br />
            <div className=" wow  animate__animated animate__fadeIn">
                <Gallery images={images}></Gallery>

            </div>



            <FlexTwo>
                <div className=" mt-44 mx-8  wow  animate__animated animate__fadeInDownBig animate__delay-1s "  >
                    <h3 className="md:text-4xl py-7 mb-3 text-3xl text-black text-start font-bold ml-8 ">About Bakery
                    </h3>
                    <p className="ml-8 leading-loose text-gray-700 tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div>

                    </div>

                </div>


                <div className="flex justify-center   items-center h-screen">
                    <div>
                        <PhotoHalfCircle
                            className="rounded-full  wow  animate__animated animate__rotateIn animate__delay-1s md:h-[420px] h-[390px] w-[390px]  md:w-[420px]"
                            photo="../../public/assets/baker6.png"
                        />
                    </div>
                </div>
            </FlexTwo>



            <div className="bg-stone-400    h-[1200px]	 ">
                <div className="relative block   p-2" >
                    <div className="card  wow  animate__animated animate__fadeInDownBig animate__delay-1s absolute z-10 md:top-24  left-4 h-  right-0 rounded-xl lg:mx-36  mx-7  p-9 border bg-white">
                        <h3 className="text-3xl font-bold py-5">We've had one goal: to bake the best tasting breads, cakes and pastries.</h3>
                        <span className="leading-loose text-gray-700 tracking-widest ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <br /><br />  <Button label="view products"></Button>
                    </div>
                    <div className="w-[full]  wow  animate__animated animate__rotateIn animate__delay-1s md:w-[650px] h-[600px] lg:ml-24 mx-5 absolute z-0   top-[350px]  "><img className="w-full h-full rounded-xl" src="../../public/assets/baker5.png"></img></div>
                    <div className="lg:w-[450px]  wow  animate__animated animate__rotateInUpRight animate__delay-1s  h-[400px] w-[300px] absolute z-10 md:left-[50%] right-[1%] top-[700px]    rounded  border  border-8 border-white    "><img className="rounded-xl w-full h-full" src="../../public/assets/bread9.png"></img></div>

                </div>

            </div>
            <br /><br />
            <br /><br />
            <br />
            <div className=" ">
                <FlexTwo>


                    <div>

                        <PhotoHalfCircle className="rounded-r-full  wow  animate__backInLeft animate__delay-1s animate__animated   h-[500px] w-[500px]  lg:h-[600px] lg:w-[600px]" photo="../../public/assets/baker1.png"></PhotoHalfCircle>
                    </div>


                    <div className="text-center  wow  animate__rubberBand  animate__animated    flex flex-col md:mx-0 mx-12  md:py-7 py-9 items-center md:items-center">

                        <span className="leading-loose text-gray-600 tracking-wider text-sm">Fresh baked breads
                        </span>
                        <h2 className="lg:text-6xl text-4xl font-bold my-4">Baked fresh daily by bakers with passion</h2>
                        <div className="text-gray-600 my-4">
                            <p className="leading-loose  md:mx-9">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
                            <p className="leading-loose">Tasty, fresh bread baked daily
                            </p>
                            <p className=" leading-loose">
                                We bake real, clean-label bread

                            </p>
                        </div>
                        <br />
                        <Button label="view products"></Button>
                    </div>
                </FlexTwo >
            </div>


            <br /><br />
            <br /><br />

            <div className="bg-stone-400 py-24">
                <div className="flex   wow  animate__fadeInDown  animate__animated animate__delay-1s  flex-wrap justify-center">
                    {data1.map((item, index) => (
                        <div className="  container     text-center  w-full   md:w-1/2 lg:w-1/4" key={index}>
                            <div className=" ">
                                <CardComponent condition='true'
                                    classPhoto="rounded-full wow  animate__rotateIn  animate__animated animate__delay-2s   h-36 w-36"
                                    photo={item.img}
                                    desc={item.desc}
                                    title={item.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <br /><br /><br /><br />
                <h3 className="text-center   wow  animate__backInLeft  animate__animated animate__delay-1s  text-5xl text-white font-bold ">Testimonials</h3>
                <br />
                <div className="flex   flex-wrap justify-center">
                    {data2.slice(4).map((item, index) => (
                        <div className=" w-full tracking-widest	 wow  animate__backInLeft  animate__animated animate__delay-1s  leading-10 container  my-3  text-center w-full   md:w-1/2 lg:w-1/3 " key={index}>
                            <CardComponent condition={true}
                                desc={'Lorem ipsum dolor sit amet cons quis dignissimos, temporibus doloribus eligendi impedit dolore ab rem ullam ipsam vitae rerum?                                '}
                                title={item.name}
                            >
                                <BiSolidQuoteAltRight className="text-center  mt-5 inline-block text-7xl  text-stone-400" />

                            </CardComponent>
                        </div>
                    ))

                    }
                </div>
            </div>
            <div className="relative bg-stone-400  h-[350px]">
                <div className="py-24 absolute  bottom-0 top-0  text-start ">
                    <div className="flex text-start md:mx-18  mx-12 bottom-129    flex-wrap justify-start ">
                        {data3.map((item, index) => (
                            <div className="lg:w-1/3 md:w-1/2 text-start wow  animate__backInLeft  animate__animated animate__delay-1s   left-0" key={index}>

                                <CardComponent photo={item.photo}
                                    classPhoto=" my-8 wow   animate__fadeInDown  animate__animated animate__delay-2s   h-[400px] w-full"

                                    desc={item.desc}
                                    title={item.title}
                                ></CardComponent>
                            </div>
                        ))}



                    </div>

                    <div className="mt-36 mx-12 mb-12 ">
                        <FlexTwo>
                            <div className=" mt-8">
                                <h3 className="text-start font-bold  text-black text-2xl ">
                                    Sign up for the newsletter

                                </h3>
                                <p className="text-start my-6 text-black text-lg  ">
                                    Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.

                                </p>


                                <form>
                                    <div className="flex  ">
                                        <div className="relative w-full">
                                            <input type="text" className="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-200  border  focus:ring-none focus:border-none  "
                                                placeholder="Enter Your Valid Email" required />
                                            <button type="submit" className="absolute top-0 bottom-0  right-0 p-3 text-lg md:px-7  text-white bg-stone-500 rounded-r-lg   border border-stone-600 hover:bg-stone-800 focus:ring-none focus:outline-none    ">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="lg:ml-44 md:ml-20  text-start  mt-8 ">
                                <h3 className="text-start font-bold  mb-5 text-black text-3xl ">
                                    Hours & Location
                                </h3>
                                <p className="mb-2 text-xl  underline text-stone-500  ">
                                    New York, NY 10007
                                </p>
                                <p className="mb-2 text-xl underline text-stone-500 ">

                                    (123) 435-7688
                                </p>
                                <p className="mb-2 text-xl">

                                    Monday - Sunday
                                </p>
                                <p className="mb-2 text-xl">

                                    7:00am - 8:00pm
                                </p>
                            </div>
                        </FlexTwo>
                    </div>
                    <br /><br />
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

            </div>





        </div >
    )
}

export default LayoutPage
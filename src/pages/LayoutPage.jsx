import { useState } from "react"
import CardComponent from "../component/content/CardComponent"
import FlexTwo from "../component/content/FlexTwo"
import PhotoHalfCircle from "../component/content/PhotoHalfCircle"
import Button from "../component/core/Button"
import Gallery from "../component/content/Gallery"

function LayoutPage() {
    const [data, setData] = useState([
        { img: '../../public/assets/cartoon1.png', title: 'Baked Fresh Daily', desc: 'Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft' },
        { img: '../../public/assets/cartoon2.png', title: 'Great Value', desc: 'With the most competitive prices on the market we are able to deliver great value without compromising on taste' },
        { img: '../../public/assets/cartoon3.png', title: 'Institutions', desc: 'We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow' },
        { img: '../../public/assets/cartoon5.png', title: 'Delivery To Your Door', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.' },
        { img: '../../public/assets/cartoon4.png', title: 'No Order Too Large', desc: 'Sample text. Click to select the text box. Click again or double click to start editing the text.    ' }
    ])

    const [images, setImages] = useState([
        '../../public/assets/bread5.png',
        '../../public/assets/bread4.png',
        '../../public/assets/bread8.png',
        '../../public/assets/bread9.png'

    ])
    return (
        <div className="bg-gray-50  ">
            <FlexTwo>
                <div className="text-center flex flex-col md:mx-0 mx-12  md:py-36 py-9 items-center md:items-center">
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
                    <PhotoHalfCircle className="rounded-l-full " photo="../../public/assets/baker2.png"></PhotoHalfCircle>
                </div>
            </FlexTwo >
            <br /><br />            <br /><br />

            <h3 className="md:text-5xl text-2xl text-black text-center font-bold mx-20">We bake fresh, handmade bread, pastries and cakes every day
            </h3>
            <br /><br />            <br /><br />
            <div className="mx-6">
                <div className=" lg:flex flex-wrap ">
                    {data.map((item, index) => (
                        <div key={index} className="lg:w-1/5 text-center ">
                            <CardComponent photo={item.img} desc={item.desc} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>


            <br /><br />            <br /><br />
            <h3 className="md:text-6xl text-5xl text-black text-center font-bold mx-20">   Our Bread</h3>
            <p className="text-center text-2xl mx-20 mt-4">A values-driven bakery</p>
            <br /><br />
            <div className="">
                <Gallery images={images}></Gallery>

            </div>



            <FlexTwo>
                <div className=" mt-36 mx-5 "  >
                    <h3 className="md:text-4xl py-7 mb-3 text-3xl text-black text-start font-bold ml-8 ">About Bakery
                    </h3>
                    <p className="ml-8 leading-loose text-gray-700 tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <div>

                    </div>

                </div>


                <div className="flex justify-center md:mx-0 mx-7 items-center h-screen">
                    <div>
                        <PhotoHalfCircle
                            className="rounded-full  md:h-[420px] h-[430px] w-[430px]  md:w-[420px]"
                            photo="../../public/assets/baker6.png"
                        />
                    </div>
                </div>
            </FlexTwo>



            <div className="bg-stone-400    h-[1200px]	 ">
                <div className="relative block   p-2" >
                    <div className="card  absolute z-10 md:top-24  left-4 h-  right-0 rounded-xl lg:mx-36  mx-7  p-9 border bg-white">
                        <h3 className="text-3xl font-bold py-5">We've had one goal: to bake the best tasting breads, cakes and pastries.</h3>
                        <span className="leading-loose text-gray-700 tracking-widest ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <br /><br />  <Button label="view products"></Button>
                    </div>
                    <div className="w-[full] md:w-[650px] h-[600px] lg:ml-24 mx-5 absolute z-0   top-[350px]  "><img className="w-full h-full rounded-xl" src="../../public/assets/baker5.png"></img></div>
                    <div className="lg:w-[450px]  h-[400px] w-[300px] absolute z-10 md:left-[50%] right-[1%] top-[700px]    rounded  border  border-8 border-white    "><img className="rounded-xl w-full h-full" src="../../public/assets/bread9.png"></img></div>

                </div>

            </div>
            <br /><br />
            <br /><br />
            <br />
            <div className=" h-[600px]">
                <FlexTwo>


                    <div>

                        <PhotoHalfCircle className="rounded-r-full" photo="../../public/assets/baker1.png"></PhotoHalfCircle>
                    </div>


                    <div className="text-center flex flex-col md:mx-0 mx-12  md:py-36 py-9 items-center md:items-center">

                        <span className="leading-loose text-gray-600 tracking-wider text-sm">Fresh baked breads
                        </span>
                        <h2 className="lg:text-6xl text-4xl font-bold my-4">Baked fresh daily by bakers with passion</h2>
                        <div className="text-gray-600 my-4">
                            <p className="leading-loose">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read.</p>
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
            <br />
        </div >
    )
}

export default LayoutPage
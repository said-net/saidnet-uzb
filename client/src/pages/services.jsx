import { useRef } from 'react'
import Bot from '../assets/bot.png'
import Dev from '../assets/dev.png'
import Lb from '../assets/lb.png'
import Ma from '../assets/ma.png'
import Webd from '../assets/webd.png'

import Slider from "react-slick";
function Services() {
    const bussinessSlider = useRef();

    const bussinessSliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: true,
                },
            },

            {
                breakpoint: 444,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };
    const cardDetail = [
        {
            title: "Veb Sayt Ochish",
            logoBg: "bg-[#D4F0FF]",
            logo: Dev,
            about: "Biznesingizni yuqori tezlikda rivojlantirish uchun!"
        },
        {
            title: "Veb Sayt Dizayni",
            logoBg: "bg-[#FFDED4]",
            logo: Webd,
            about: "Veb saytingiz uchun yuqori sifatdagi UI tayyorlash"
        },
        {
            title: "Telegram Bot",
            logoBg: "bg-[#FFD4D4]",
            logo: Bot,
            about: "Telegramda biznes boshlash yoki maqsad bajarish uchun!"
        },
        {
            title: "Mobil Ilovalar",
            logoBg: "bg-[#FFDED4]",
            logo: Ma,
            about: "Mobil ilovalar ishlab chiqarish va biznesingizni rivojlantirish!"
        },
        {
            title: "Logo Branding",
            logoBg: "bg-[#D4F0FF]",
            logo: Lb,
            about: "Kompaniyangiz uchun yuqori sifatdagi LOGO tayyorlash uchun!"
        },
    ];
    const moveLeft = (slider) => {
        slider.current.slickPrev();
    };
    const moveRight = (slider) => {
        slider.current.slickNext();
    };

    return (
        <div className="w-full relative sm:h-[650px] h-[500px] py-28 overflow-hidden md:mt-28 mt-14">
            <div className="absolute right-16 top-56 h-96 p-2 w-96 border-dashed border-[#000000] border-[1px] rounded-full"></div>
            <div className="max-w-[1293px] mr-3 w-full sm:h-[578px] h-[500px] bg-[#ECF7FF] rounded-tr-[137px] sm:rounded-tr-[400px] absolute top-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24">
                <div className=" flex flex-col sm:gap-16 md:gap-24 gap-12">
                    <div className="mx-auto md:text-5xl text-4xl text-[#331B3B] font-hindVadodara -tracking-[0.01] leading-[106.3%]">
                        <h1 className=" font-bold self-center text-center">
                            Siz uchun
                        </h1>
                        <span className=" font-light self-center">
                            Nimalar
                            <span className="relative ml-2">
                                Qila Olamiz
                                <span className="bg-[#FDC221] md:h-2.5 h-2 bottom-1.5 md:bottom-2 -z-[1] right-0 absolute md:w-48 w-[145px]" />
                            </span>
                        </span>
                    </div>
                    <div className="lg:pl-32 sm:pl-8 px-5 flex gap-12">
                        <div className="md:flex gap-4 items-end hidden">
                            <svg
                                width="35"
                                height="34"
                                viewBox="0 0 35 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-180 cursor-pointer"
                                onClick={() => moveLeft(bussinessSlider)}
                            >
                                <path
                                    d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                                    stroke="black"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M15 10L23 17.3443L15 24"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <svg
                                width="35"
                                height="34"
                                viewBox="0 0 35 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer"
                                onClick={() => moveRight(bussinessSlider)}
                            >
                                <path
                                    d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z"
                                    stroke="black"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M15 10L23 17.3443L15 24"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="dream-agency-bussiness flex justify-center">
                            <Slider {...bussinessSliderSetting} ref={bussinessSlider}>
                                {cardDetail?.map((card, index) => (
                                    <div
                                        key={index}
                                        className="max-w-[308px] w-full p-[18px] flex flex-col justify-start bg-white shadow-3xl rounded-[10px] overflow-hidden"
                                    >
                                        <div
                                            className={`w-[52px] h-12 flex justify-center items-center rounded-[10px]`}
                                        >
                                            <img src={card?.logo} alt={card?.title} />
                                        </div>
                                        <div>
                                            <span className="text-base mt-3 overflow-hidden uppercase font-bold font-hindVadodara leading-[137.3%] -tracking-tighter">
                                                {card.title}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-[15px] mt-1.5 max-w-[230px] h-full max-h-16 Light font-light font-hindVadodara leading-[145.3%] tracking-[0.02]">
                                                {card?.about}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
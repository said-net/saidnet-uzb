import { useRef } from "react";
import Slider from "react-slick";
import Aut from '../assets/web/aut.png'
import BotPic from '../assets/web/bot.png'
import Landing from '../assets/web/landing.png'
import Promo from '../assets/web/promo.png'
import Shop from '../assets/web/shop.png'
function Examples() {

    const workSlider = useRef();
    const moveLeft = (slider) => {
        slider.current.slickPrev();
    };
    const moveRight = (slider) => {
        slider.current.slickNext();
    };
    const workSliderSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        initialSlide: 0,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
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
    const templateCard = [
        {
            title: "Internet do'kon",
            img: Shop,
        },
        {
            title: "Promo sayt",
            img: Promo,
        },
        {
            title: "Landing page",
            img: Landing,
        },
        {
            title: "Avtomatlashuv",
            img: Aut,
        },
        {
            title: "Telegram bot",
            img: BotPic,
        },
    ];

    return (
        <div className="w-full relative h-[725px] md:h-[636px] py-24 overflow-hidden md:mt-20 mt-12">
            <div className="max-w-[1300px] ml-3 w-full h-full bg-[#FFDED4] rounded-tl-[137px] sm:rounded-tl-[400px] absolute top-0 right-0 z-10"></div>
            <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24 md:py-40">
                <div className=" flex flex-col gap-8 sm:gap-10 md:gap-24 mx-auto">
                    <div className="flex flex-col gap-5 mx-5">
                        <div className="relative md:absolute lg:left-32 md:left-5 md:top-10">
                            <h1 className="lg:text-5xl text-3xl text-[#331B3B] font-bold font-hindVadodara leading-[106.3%] -tracking-[0.01] self-center">
                                Biznes Uchun
                                <p />
                                <span className="font-light">
                                    Kerakli
                                    <span className="relative z-10 ml-2">
                                        Tavfsiya Saytlar
                                        <span className="bg-[#FDC221] h-2 bottom-1.5 lg:bottom-[9px] -z-[1] right-0 absolute lg:w-40 w-[104px]" />
                                    </span>
                                </span>
                            </h1>
                        </div>
                        <span className="relative md:absolute text-lg font-normal max-w-md xl:max-w-lg w-full md:right-12 md:top-10">
                            Quyida ko'rsatilgandek veb sayt yoki raqamli maxsulotlar siz uchun biznesingizni rivojlantirishda juda katta ahamiyatga ega!
                        </span>
                    </div>
                    <div className="lg:pl-64 sm:pl-8 px-5 flex gap-12">
                        <div className="md:flex gap-4 items-end hidden">
                            <svg
                                width="35"
                                height="34"
                                viewBox="0 0 35 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-180 cursor-pointer"
                                onClick={() => moveLeft(workSlider)}
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
                                onClick={() => moveRight(workSlider)}
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
                        <div className="flex dream-agency-work">
                            <Slider {...workSliderSetting} ref={workSlider}>
                                {templateCard?.map((card, index) => (
                                    <div
                                        className="max-w-lg w-full p-[18px] justify-start bg-white shadow-3xl rounded-[10px] self-center"
                                        key={index}
                                    >
                                        <div className="h-full">
                                            <img
                                                src={card.img}
                                                alt="card image"
                                                className="h-48 w-full object-cover"
                                            />
                                        </div>
                                        <div className="mt-5 flex justify-between">
                                            <span className="text-2xl font-bold text-[#331B3B]">
                                                {card.title}
                                            </span>
                                            <div onClick={() => window.open('tel:+998931042255')} className="rounded-[100px] border-[2px] text-sm border-[#343434] py-0.5 px-3 w-28 whitespace-nowrap h-max cursor-pointer text-center">
                                                Buyurtma
                                            </div>
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

export default Examples;
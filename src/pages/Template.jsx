import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Lottie from "../components/lottie";
import Bot from '../assets/bot.png'
import Dev from '../assets/dev.png'
import Lb from '../assets/lb.png'
import Ma from '../assets/ma.png'
import Webd from '../assets/webd.png'
// 
import Aut from '../assets/web/aut.png'
import BotPic from '../assets/web/bot.png'
import Landing from '../assets/web/landing.png'
import Promo from '../assets/web/promo.png'
import Shop from '../assets/web/shop.png'
function Template() {
    const bussinessSlider = useRef();
    const workSlider = useRef();
    const moveRight = (slider) => {
        slider.current.slickNext();
    };

    const moveLeft = (slider) => {
        slider.current.slickPrev();
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

    const testimonialsCard = [
        {
            title: "Sharqiy.uz",
            discription:
                "Internet do'kon juda yaxshi ishlayabdi, Kuryer, Operator, Boshqaruv va Sotuv panellari bir biri bilan mukammal birlashtirilgan va tezligi maksimal!",
        },
        {
            title: "Tantana Service",
            discription:
                "Mijozlardan kelayotga buyurtmalarga javob berishimiz juda usonlashdi va har bir operator, mijoz bilan ishlash maksimal darajada tezlashdi! Oylik hisoblash va xizmatlar narxlarini avtomatlashtirish yaxshi g'oya edi!",
        },
    ];

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

    const Button = ({ className, onClick, label }) => {
        return (
            <button
                className={`bg-[#331B3B] rounded-[10px] text-[17px] text-white uppercase font-hindVadodara ${className}`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    };

    return (
        <div className="bg-white">
            <div className="overflow-hidden">
                <nav className="px-5 sm:px-[50px] py-[26.36px] flex justify-between items-center relative max-w-screen-2xl mx-auto ">
                    <div className="xl:mr-56 cursor-pointer">
                        <p className="text-2xl  font-bold font-playFairDisplay leading-7 tracking-[0.01]">
                            SAIDNET.UZ
                        </p>
                    </div>
                    <ul className="flex gap-4 items-center">
                        <p onClick={() => window.open('tel:+998931042255')} className="p-[5px_10px] rounded-full bg-red-500 cursor-pointer hover:shadow-lg duration-300 hover:shadow-red-200 text-white z-[999] text-[12px] sm:text-[20px]">+998-(93)-104-22-55</p>
                    </ul>

                    <div className="absolute xl:-right-10 xl:top-0 -right-56 -top-20 hidden md:block">
                        <svg
                            width="570"
                            height="712"
                            viewBox="0 0 570 712"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M267.038 685.5C-191.362 549.5 42.7044 172.167 217.038 0.5L436.538 -61.5L779.038 -108L867.538 168.5C858.371 397.5 725.438 821.5 267.038 685.5Z"
                                fill="#FEC828"
                                fillOpacity="0.2"
                            />
                        </svg>
                    </div>

                </nav>
                <div className="mx-auto max-w-screen-2xl">
                    <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
                        <div className="flex flex-col items-center md:items-start gap-7">
                            <div className="w-full text-center md:text-left max-w-xl overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-[#331B3B] font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]">
                                <h1 className="whitespace-nowrap">SAIDNET</h1>
                                <p />
                                <span className="font-light">
                                    Biznes uchun
                                    <br />
                                    <span className="relative w-full z-10">
                                        Imkoniyat
                                        <span className="bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full" />
                                    </span>
                                </span>
                            </div>
                            <div className="max-w-[515px] flex flex-col gap-8">
                                <span className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left">
                                    Biznesingizni avtomatlashtirish foyda stavkasini deyarli 10X ga oshirish demakdir!
                                </span>
                                <Button
                                    onClick={() => window.open('https://t.me/saidweb')}
                                    className="self-center md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide"
                                    label="TELEGARM"
                                />
                            </div>
                        </div>
                        <div>
                            <Lottie data={'https://lottie.host/c5189164-0c07-4560-b5f0-70f66331bfb7/2FQ0XsBlVE.json'} />
                        </div>
                    </div>
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
                    <div className="flex justify-between items-center w-full px-5 sm:px-[50px] flex-col-reverse lg:flex-row mt-11 sm:mt-0 gap-16 md:gap-4">
                        <div className="relative lg:w-[45%]">
                            <Lottie data={'https://lottie.host/90babc95-721a-464f-b21d-f4d427981149/yL3R2trtZe.json'} />
                        </div>
                        <div className="flex flex-col gap-5 justify-start items-center md:items-start lg:w-[45%]">
                            <div className="flex flex-col relative md:mt-32 lg:text-5xl text-4xl text-[#331B3B] leading-[106.3%] -tracking-[0.01] ont-hindVadodara">
                                <h1 className=" font-bold text-center md:text-left">
                                    SAIDNET JAMOASI
                                </h1>
                                <span className="lg:text-5xl text-4xl font-light">
                                    Qo'lidan
                                    <span className="ml-3 relative z-10">
                                        Keladi
                                        <span className="bg-[#FDC221] h-2 bottom-[10px] lg:bottom-[14px] -z-[1] left-0 absolute w-full" />
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p><b>SAIDNET</b> - Jamoasi yosh va iqtidorli o'z kasbini sevuvchi insonlardan tuzilgan! Biz siz uchun <b className="uppercase">Veb sayt, mobil ilova, veb dastur, veb server, telegram bot, logo, UI/UX</b> larni yuqori darajada talablaringizga mos ravishda tayyorlab beramiz!</p>
                            </div>
                            <div className="mt-2 md:mt-10">
                                <Button
                                    onClick={() => window.open('tel:+998931042255')}
                                    className="whitespace-nowrap max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide px-10"
                                    label="Qo'ng'iroq qilish"
                                />
                            </div>
                        </div>
                    </div>
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
                    <div className="flex flex-col items-center justify-center w-full gap-14 md:mt-[75px] mt-9 px-5">
                        <div className=" text-center w-full text-3xl md:text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01em]">
                            <h1 className="whitespace-nowrap font-bold leading-[99.8%] text-center">
                                Biz uchun sharhlar
                            </h1>
                            <span className="md:whitespace-nowrap !text-center font-light mt-1 max-w-sm md:max-w-xl mx-auto">
                                Mijozlar
                                <span className="relative z-10 ml-2">
                                    Tarafidan
                                    <span className="bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0" />
                                </span>
                            </span>
                        </div>
                        <div className="flex sm:gap-[69px] gap-7 flex-col md:flex-row">
                            {testimonialsCard.map((data, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-7 justify-start drop-shadow-[0_7px_9px_rgba(0,0,0,0.15)] bg-white pl-[29px] pr-[35px] py-9"
                                >
                                    <div>
                                        <svg
                                            width="46"
                                            height="40"
                                            viewBox="0 0 46 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M35.4128 39.5905L45.4 18.5185V0.409668H24.9856V19.6161H32.7776L24.9856 39.5905H35.4128ZM28.0336 16.5681V3.45927H42.3504V17.8321L33.4816 36.5409H29.4464L37.2352 16.5697H28.0336V16.5681Z"
                                                fill="#FDC221"
                                            />
                                            <path
                                                d="M11.0272 39.5905L21.0144 18.5185V0.409668H0.600006V19.6161H8.39361L0.600006 39.5905H11.0272ZM3.64801 16.5681V3.45927H17.9648V17.8321L9.09761 36.5409H5.06241L12.8512 16.5697H3.64801V16.5681Z"
                                                fill="#FDC221"
                                            />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-start gap-3">
                                        <span className=" max-w-[384px] w-full text-base font-normal font-hindVadodara leading-[159.8%] tracking-wide">
                                            {data.discription}
                                        </span>
                                        <span className="flex gap-2 items-center text-base font-semibold font-hindVadodara leading-[159.8%] tracking-wide">
                                            <span className=" border-[2px] border-[#FDC221] w-3 relative bottom-0.5" />
                                            {data.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-black rounded-tr-[158px] relative pt-[66px] mt-[92px] w-full">
                    <div className="w-full flex md:gap-4 gap-8 sm:justify-between flex-col md:flex-row max-w-screen-2xl mx-auto pb-[76px] sm:pl-12 sm:pr-12 px-5 lg:pr-[152px]">
                        <div className="flex flex-col gap-4 justify-start">
                            <h1 className="text-4xl text-white font-playFairDisplay tracking-[0.01] w-fit cursor-pointer">
                                SAIDNET.UZ
                            </h1>
                            <p className="text-base max-w-[439px] w-full text-white font-hindVadodara leading-[159.3%] font-normal tracking-wide">
                                Avtomatlashtiruv zamonida siz ortda qolmang!
                            </p>
                            <p className="text-base text-white font-hindVadodara leading-[159.3%] font-semibold tracking-wide uppercase">
                                ALOQA MANZILLARI
                            </p>
                            <div>
                                <p className="text-white cursor-pointer" onClick={() => window.open('tel:+998931042255')}>+998-(93)-104-22-55</p>
                                <p className="text-white cursor-pointer" onClick={() => window.open('https://t.me/Saidweb')}>Telegram: @Saidweb</p>
                                <p className="text-white">Manzil: Andijon</p>
                            </div>
                        </div>
                        <div className="relative md:w-[20%]">
                            <Lottie data={'https://lottie.host/ea292145-d46f-4a81-81eb-af9706f811a2/BFzs069YBx.json'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Template;

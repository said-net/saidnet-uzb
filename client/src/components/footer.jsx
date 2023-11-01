import Lottie from "./lottie";

function Footer() {
    return (
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
    );
}

export default Footer;
import { Button } from "../components/button";
import Lottie from "../components/lottie";

function Home() {
    return (
        <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
            <div className="absolute -top-[160px] right-0 hidden lg:inline">
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
    );
}

export default Home;
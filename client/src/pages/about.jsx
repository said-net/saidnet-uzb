import { Button } from "../components/button";
import Lottie from "../components/lottie";

function AboutUs() {
    return (
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
    );
}

export default AboutUs;
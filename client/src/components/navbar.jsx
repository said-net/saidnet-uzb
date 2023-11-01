function Navbar() {
    return (
        <div className="h-[100px] w-full">
            <nav className="px-5 sm:px-[50px] py-[26.36px] flex justify-between items-center fixed top-0 left-0 max-w-screen-2xl mx-auto w-full bg-[#ffffffb5] z-[9999] backdrop-blur-md">
                <div className="xl:mr-56 cursor-pointer">
                    <p className="text-2xl  font-bold font-playFairDisplay leading-7 tracking-[0.01]">
                        SAIDNET.UZ
                    </p>
                </div>
                <ul className="flex gap-4 items-center">
                    <p onClick={() => window.open('tel:+998931042255')} className="p-[5px_10px] rounded-full bg-red-500 cursor-pointer hover:shadow-lg duration-300 hover:shadow-red-200 text-white z-[999] text-[12px] sm:text-[20px]">+998-(93)-104-22-55</p>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
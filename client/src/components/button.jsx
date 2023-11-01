export const Button = ({ className, onClick, label }) => {
    return (
        <button
            className={`bg-[#331B3B] rounded-[10px] text-[17px] text-white uppercase font-hindVadodara ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
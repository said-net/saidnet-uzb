function Lottie({ data }) {
    return (
        <dotlottie-player src={data} background="transparent" speed="1" direction="1" mode="normal" loop autoplay></dotlottie-player>
    );
}

export default Lottie;
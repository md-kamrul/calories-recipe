import heroBg from "../../assets/images/hero-bg.jpg"

const Hero = () => {
    return (
        <div className="hero h-[560px] rounded-3xl" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="w-[897px] mb-5 text-5xl font-bold">Discover an exceptional cooking class <br />tailored for you!</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
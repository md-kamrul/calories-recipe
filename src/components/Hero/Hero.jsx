import heroBg from "../../assets/images/hero-bg.jpg"

const Hero = () => {
    return (
        <div className="hero h-[560px] rounded-3xl" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[80%] mx-auto">
                    <h1 className="mb-5 text-5xl font-bold">
                        Discover an exceptional cooking<br />class tailored for you!
                    </h1>
                    <p className="mb-5 text-lg">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <button className="btn bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-[#0be58a65] hover:border-[#0BE58A] hover:text-white mr-6 rounded-[50px]">Explore Now</button>
                    <button className="btn border-2 border-white bg-transparent hover:bg-transparent hover:border-[#0BE58A] text-white hover:text-[#0BE58A] mr-6 rounded-[50px]">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
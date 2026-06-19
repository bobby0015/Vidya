import Slider from "./slider/Slider"


const slides = [
    {
        taglineParts: ["learn", "teach", "grow"],
        desc: 'Your personalized learning journey starts here. Explore tailored recommendations and track your progress. Master coding, technology, and <br> industry-ready skills with personalized learning paths designed for your future.',
        img: `https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-background-2.jpg`
    },
    {
        taglineParts: ["Code", "Create", "Conquer"],
        desc: `Unlock your potential with industry-focused learning. Code innovative solutions, create projects that matter, and <br> conquer your career goals through guided learning experiences.`,
        img: `https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-background-3.jpg`
    },
]

const Carousel = () => {
    return (
        <div>
            <Slider autoSlide={true}>
                {
                    slides.map((s, i) => (
                        <div key={i} className="relative w-full h-125 shrink-0">
                            <img
                                src={s.img}
                                className="w-full h-full object-cover object-center opacity-95"
                                alt=""
                            />

                            {/* Black overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
                                <h1 className="transition-all ease-in-out delay-75 text-5xl mb-4 font-bold">Welcome to <span className="text-[#04D2C8]">V</span>IDY<span className="text-[#04D2C8]">A</span>!</h1>
                                <h3 className="transition-all ease-in-out delay-75 text-3xl font-semibold mb-8">
                                    {s.taglineParts.map((word, i) => (
                                        <span key={i}>
                                            {word}<span className="text-[#04D2C8]">.</span>{" "}
                                        </span>
                                    ))}
                                </h3>
                                <p className="transition-all ease-in-out delay-75 mb-16" dangerouslySetInnerHTML={{ __html: s.desc }} />
                                <div className="flex">
                                    <a className="py-2 mr-5 px-8 bg-[#04D2C8] text-white rounded-full" href="#">Join us</a>
                                    <a className="py-2 mr-5 px-8 text-[#04D2C8] bg-white rounded-full" href="#">Explore Courses</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel
import Carousel from "../components/Carousel"
import { firstSectionCardContent } from '../data/home'

const Home = () => {
  console.log(firstSectionCardContent)
  return (
    <>
      <div className="">
        <Carousel />
        <section className="my-20">
          <div className="flex items-center justify-center relative">
            <h1 className="text-[150px] text-[#e3eaf0]" style={{ fontFamily: "'Nothing You Could Do', cursive" }}>learn</h1>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-2 text-[#04d2c8]">Guaranteed Success</h2>
              <h3 className="text-5xl font-bold">Our Services</h3>
            </div>
          </div>
          <div className="flex items-center justify-center mb-24">
            <p className="w-250 text-xl text-center">Empowering learners with industry-focused courses, hands-on projects, and personalized learning experiences designed to build real-world skills and career confidence.</p>
          </div>
          {/* card for first section */}
          <div className="w-[80%] m-auto grid grid-cols-3 gap-6">
            {
              firstSectionCardContent.map((card) => (
                <div key={card.title} className="flex flex-col items-center justify-center text-black">
                  <img src={card.img} alt={card.title} />
                  <h1 className="my-3 text-2xl font-semibold  ">{card.title}</h1>
                  <p className="mt-4 text-center">{card.desc}</p>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

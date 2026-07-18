import CourseCard from "../components/card/CourseCard"
import Carousel from "../components/Carousel"
import Heading from "../components/Heading/Heading"
import { firstSectionCardContent } from '../data/home'
import { popularCourses, learningFeatures } from "../data/home"

const Home = () => {

  return (
    <>
      <div className="">
        <Carousel />
        <section className="my-20">
          <div className="flex items-center justify-center relative">
            <Heading h1="learn" h1SizeinPx={150} h2="Guaranteed Success" h3="Our Services" />
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
        <section className="my-24">
          <div className="w-[60%] m-auto text-center">
            <h1 className="text-4xl font-bold">Popular Online Courses</h1>
            <p className="text-center mt-6 text-lg font-semibold">Explore our most sought-after courses designed to help you <br /> master in-demand skills, build real-world projects, and accelerate your career growth.</p>
          </div>
          <div className="w-[70%] mt-16 mx-auto grid grid-cols-4 gap-x-8 gap-y-12">
            {
              popularCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  teacher={course.instructor}
                  img={course.image}
                  desc={course.description}
                  rating={course.rating}
                  price={course.price}
                />
              ))
            }
          </div>
        </section>
        <section className="mb-64">
          <div className="flex items-center justify-center relative">
            <Heading h1="process" h1SizeinPx={150} h2="Research & Pedagogy" h3="How It Works?" />
          </div>
          <div className="bg-cover flex justify-between bg-center h-64 w-[70%] my-16 mx-auto" style={{ backgroundImage: 'url(https://ik.imagekit.io/divyam149193/Vidya/process-background-line.png)' }}>
            {
              learningFeatures.map((data) => (
                <div key={data.id} className="">
                  <img src={data.image} alt={data.title} />
                  <div className="text-center mt-6">
                    <h1 className="text-xl font-semibold">{data.title}</h1>
                    <p className="text-[#929292]">{data.description}</p>
                  </div>
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

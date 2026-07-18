import { BiSolidPhoneCall } from "react-icons/bi"
import { FiClock } from "react-icons/fi"
import { popularCourseCategories, quickLinks } from "../data/home"
// import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="bg-[#232936] text-white px-64">
            {/* Top footer  */}
            <section className="py-24 grid grid-cols-4 gap-4">
                {/* First colomn */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">About</h1>
                    <p className="text-[#929292] w-[75%] mb-6">VIDYA is an innovative e-learning platform committed to empowering learners worldwide with accessible, high-quality, industry-focused courses. Transform your future with master coding, technology, and industry-ready skills.</p>
                    <div>
                        <a className="flex items-center" href=""><BiSolidPhoneCall /> <span className="ml-4">+91 7982118900</span></a>
                        <a className="flex items-center" href=""><FiClock /><span className="ml-4">Mon - Sat 8.00 - 18.00</span></a>
                    </div>
                </div>
                {/* Second colomn */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Popular Courses</h1>
                    <div className="flex flex-col">
                        {
                            popularCourseCategories.map((data) => (
                                <a className="text-[#929292] cursor-pointer my-2" key={data.id} >{data.title}</a>
                            ))
                        }
                    </div>
                </div>
                {/* Third colomn */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
                    <div className="flex flex-col">
                        {
                            quickLinks.map((data) => (
                                <a className="text-[#929292] cursor-pointer my-2" key={data.id} >{data.title}</a>
                            ))
                        }
                    </div>
                </div>
                {/* Fourth colomn */}
                <div>
                    <h1 className="text-2xl font-bold mb-8">Flexible Learning</h1>
                    <img src="https://ik.imagekit.io/divyam149193/Vidya/worldmap.png?updatedAt=1784416902866" alt="world" />
                </div>
            </section>
        </footer>
    )
}

export default Footer

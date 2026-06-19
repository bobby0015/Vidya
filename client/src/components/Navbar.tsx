import { FaFacebookF, FaInstagramSquare, FaPencilAlt, FaRegUser, FaTwitter } from "react-icons/fa"
import vidya from '../assets/brand/VIDYA.png'
import { LiaSearchSolid } from "react-icons/lia"
import { RiMenuFill, RiShoppingBag2Fill } from "react-icons/ri"


const Navbar = () => {
    return (
        <>
            {/* top nav */}
            <div className="flex justify-between mb-1 px-52 py-2">
                <div className="flex items-center">
                    <h3 className="mx-3 text-sm">WLECOME</h3>
                    <h3 className="mx-3 text-sm">CALL + 91 7982118900</h3>
                    <h3 className="mx-3 text-sm">FOLLOW US</h3>
                    <div className="mx-3 flex items-center" id="social-icons">
                        <FaTwitter className="mx-2 cursor-pointer hover:text-[#04D2C8]" />
                        <FaInstagramSquare className="mx-2 cursor-pointer hover:text-[#04D2C8]" />
                        <FaFacebookF className="mx-2 cursor-pointer hover:text-[#04D2C8]" />
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="" className="flex items-center bg-[#04D2C8] text-white mx-3 py-1.5 px-8 rounded-full text-sm"><FaRegUser className="mr-2" /> Login</a>
                    <a href="" className="flex items-center bg-[#04D2C8] text-white mx-3 py-1.5 px-8 rounded-full text-sm"><FaPencilAlt className="mr-2" /> Register</a>
                </div>
            </div>
            <hr className="text-[#DCDCDC]" />
            {/* bottom nav */}
            <div className="px-52 flex justify-between items-center">
                <div>
                    <img width={199} height={133} src={vidya} alt="Vidya" />
                </div>
                <div className="flex items-center">
                    <ul className="flex">
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Home</li>
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Courses</li>
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Instructors</li>
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Events</li>
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Pages</li>
                        <li className="m-6 text-lg hover:text-[#04D2C8] cursor-pointer">Elements</li>
                    </ul>
                    <div className="flex ml-8">
                        <LiaSearchSolid className="m-2 text-lg" />
                        <div className="relative">
                            <RiShoppingBag2Fill className="m-2 text-lg" />
                            <p className="absolute top-0 right-px min-w-4.5 h-4.5 px-1 py-1 rounded-full bg-[#04D2C8] text-white text-[10px] font-medium flexitems-center justify-center leading-none">0</p>
                        </div>
                        <RiMenuFill className="m-2 text-lg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

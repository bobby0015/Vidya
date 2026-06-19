import { CiStar } from "react-icons/ci"

interface propType {
    title: string,
    img: string,
    desc: string,
    teacher: string
    key: number,
    rating: number,
    price: number
}

const CourseCard = (props: propType) => {
  return (
    <div key={props.key} className="bg-white shadow-xl text-black rounded-md">
      <img className="h-50 w-full" src={props.img} alt={props.title} />
      <div className="m-4">
        <div className="h-40">
            <h1 className="text-xl font-semibold">{props.title}</h1>
            <h2 className="text-[#b9b9b9] mb-4">{props.teacher}</h2>
            <p className="text-[#808080]">{props.desc}</p>
        </div>
        <div className="my-4">
            <hr className="text-[#b9b9b9] mt-4"/>
            <div className="flex justify-between my-4">
                <a href="" className="flex items-center"><CiStar className="text-xl font-bold"/>{props.rating} Ratings</a>
                <a href="" className="px-1.5 py-1 rounded-md bg-[#f90] text-white text-sm">₹ {props.price}</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

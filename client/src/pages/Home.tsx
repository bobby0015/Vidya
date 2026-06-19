import Carousel from "../components/Carousel"

const slides = [
    `https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-background-2.jpg`,
    "https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-background-3.jpg",
]

const Home = () => {
  return (
    <>
      <div className="">
        <Carousel autoSlide={true}>
            {
              slides.map((s: string) => ( 
                <img src={s} />
              ))
            }
        </Carousel>
      </div>
    </>
  )
}

export default Home

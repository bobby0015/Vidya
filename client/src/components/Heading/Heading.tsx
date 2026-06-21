interface heading {
    h1: string,
    h2: string,
    h3: string,
    h1SizeinPx : number
}

const Heading = ({ h1, h2, h3, h1SizeinPx }: heading) => {
    return (
        <>
            <h1 className={`text-[${h1SizeinPx}px] text-[#e3eaf0]`} style={{ fontFamily: "'Nothing You Could Do', cursive" }}>{h1}</h1>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold mb-2 text-[#04d2c8]">{h2}</h2>
                <h3 className="text-5xl font-bold">{h3}</h3>
            </div>
        </>
    )
}

export default Heading

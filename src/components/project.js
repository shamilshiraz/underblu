
export default function Project({project}) {
    const { title1, title2, src } = project;
    return (
        <div className='border-t-2 border-black pt-[0.8vw] pb-[0.8vw] cursor-pointer w-full flex justify-center items-center font-ed text-2xl'>
            <p className="me-[0.75vw]">{title1}</p>
            <div className=''>
                <img className="w-[10vw]" src={`/medias/${src}`}></img>
            </div>
            <p className="ms-[0.75vw]">{title2}</p>
        </div>
    )
}
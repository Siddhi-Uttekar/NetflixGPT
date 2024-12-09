
//get title and overview extract it here using prop
const VideoTitle = ({title, overview}) => {
    return(
        <div className=" w-screen h-screen aspect-video pt-[20%] px-24 -mt-11 absolute text-white bg-gradient-to-t to-black">
           <h1 className="text-4xl font-bold ">{title}</h1>
           <p className="py-6 text-lg w-1/3">{overview}</p>
        <div>
        <button className="bg-white text-black p-4 px-16 m-2 text-center text-lg rounded-md hover:bg-opacity-40"> ▶️ Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 text-center text-lg rounded-md">More Info</button>
        </div>
        </div>
    )
}

export default VideoTitle;
import {relaxingImages, randomImage} from "../images"
import { useState } from "react"
import { FaSmileWink } from "react-icons/fa";

const Gallery = () => {
  const [ images,setImages] = useState([relaxingImages[0]])
const handleImages = () => {
setImages([randomImage()])


document.body.style.backgroundImage = `url(${images[0]})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";

}
  return (
    <section className="d-flex flex-column d-flex">

    <h1 className="gallery text-center mt-5">If you get bored and spent too much here is the best place <FaSmileWink /> </h1>
    <div>
      <button className="gallery-btn btn btn-rounded text-center" onClick={handleImages}>relax</button>
    </div>
    
    
    {/* <div className="random-image">
      {images.map((image,index)=>(
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
    </div> */}

    </section>
    
  )
}

export default Gallery
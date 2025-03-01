import Image from "next/image"
const Carousel = (image,logo,description) => {
  return (
    <div className="flex  p-4  group">
        <Image height={5000} width={600} className="rounded-3xl pl-28"
            src="/images/carousel images/fifa.jpg"
            alt="fifa"
        />
        <div>
            
        </div>
    </div>
  )
}

export default Carousel
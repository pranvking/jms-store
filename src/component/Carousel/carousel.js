import Image from "next/image"
const Carousel = (image,logo,description) => {
  return (
    <div className="flex  p-4  group">
        <Image height={5000} width={800} className="rounded-3xl pl-28"
            src="/images/carousel images/fifa.jpg"
            alt="fifa"
        />
        <div>
            <div className="bg-white items-center">
                <Image height={2000} width={300} className="rounded-3xl pl-28"
                    src="/images/carousel logo/fifa logo.svg.png"
                    alt="fifa"
                />
            </div>
        </div>
    </div>
  )
}

export default Carousel
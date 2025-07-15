
import ServicesCom from "@/app/components/ServicesCom"
import HeroCom from "@/app/components/HeroCom"
const page = () => {
  const img = "/imgs/Hero.jpg"
  return (
    <div>
      <HeroCom src={img} title="Services"/>
      <ServicesCom/>
    </div>
  )
}

export default page
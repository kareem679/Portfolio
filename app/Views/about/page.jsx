import AboutCom from "@/app/components/AboutCom"
import HeroCom from "@/app/components/HeroCom"
const page = () => {
  const img = "/imgs/Hero.jpg"
  return (
    <div>
      <HeroCom src={img} title="About"/>
      <AboutCom/>
    </div>
  )
}

export default page
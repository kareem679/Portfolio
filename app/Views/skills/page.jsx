import SkillsCom from "@/app/components/SkillsCom"
import HeroCom from "@/app/components/HeroCom"
const page = () => {
  const img = "/imgs/Hero.jpg"
  return (
    <div>
      <HeroCom src={img} title="Skills"/>
      <SkillsCom/>
    </div>
  )
}

export default page
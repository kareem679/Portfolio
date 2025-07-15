
import ContactCom from "@/app/components/ContactCom"
import HeroCom from "@/app/components/HeroCom"
const page = () => {
  const img = "/imgs/Hero.jpg"
  return (
    <div>
      <HeroCom src={img} title="Contact"/>
      <ContactCom/>
    </div>
  )
}

export default page
import HeroSection from "@/component/HomeSection/HeroSection/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className='my-10' >

      <HeroSection></HeroSection>


      <Image
      src="/hello.webp"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </main>
  )
}

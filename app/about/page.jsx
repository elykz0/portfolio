import Photo from "@/components/Photo"
import Link from "next/link"

const About = () => {
  return (
    <section className="h-full">
      <div className=" container mx-auto h-full">
      <h1 className=" flex flex-col mb-9 underline items-center justify-between text-4xl">
              About Me
            </h1>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
            <p className="max-w-[550px] mb-9 text-gray-300 text-3xl">
            I'm Kyle, a motivated and passionate high school student @ <Link href="https://qhss.org/" className="text-accent">QHSS</Link> seeking to leverage a strong academic background and enthusiasm for computer science, artificial intelligence, and data science to contribute to real-world applications and gain valuable experience in the field.
            </p>
            <Photo />
        </div>
        
      </div>
    </section>
  )
}

export default About
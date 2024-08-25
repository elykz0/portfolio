import Image from "next/image"
import Link from "next/link"


const Projects = () => {
  return (
    <section className="h-full">
      <div className="items-center text-center justify-between text-4xl font-semibold ">
            PROJECTS
      </div>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row justify-between items-center pt-10">
              <div className="text-center xl:text-left text-3xl max-w-[550px] ">
                  Developed and Deployed the official website for H-Linc using HTML, Javascript and Tailwind css for styling. The website was deployed with Vercel, but we plan on adding a custom domain. I am also the CTO and Head Tech Director of H-Linc.
              </div>
              <div className="w-[500px] h-[500px]">
              <Image
              src="/assets/hlinc-photo.png" 
              priority  
              quality={100}
              width={600}
              height={600}
              alt="hlincPhoto"
              className="pt-28 p"
              />
              </div>
        </div>
        <div className="items-center text-center text-2xl text-teal-300 hover:text-primary">
          <Link href="https://h-linc.vercel.app/">
          View Website
          </Link>
        </div>
        <div className="text-center pt-20 text-2xl">
          More Coming Soon...
        </div>
      </div>

    </section>
  )
}
export default Projects
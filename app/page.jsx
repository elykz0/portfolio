import Photo from "@/components/Photo";
import Social from "@/components/Social";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
              <span className=" text-xl">Software Developer</span>
              
                <h1 className="h1">
                  Hello I'm <br /> <span className="text-accent">Kyle Zhang</span>
                </h1>
                <p className="max-w-[550px] mb-9 text-white/80">
                  I am adept at creating visually stunning webpages and have
                  proficiency in numerous programming languages and technologies.
                </p>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  {/* <Button
                   variant="outline" 
                   size="lg" 
                   className="uppercase flex items-center gap-2"
                   >
                    <span>Download Resume</span>
                    <FiDownload className="text-xl" />
                   </Button> */}
                   <div className="mb-8 xl:mb-0">
                    <Social containerStyles= "flex gap-6" 
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                    items-center text-accent text-base hover:bg-accent hover:text-primary 
                    hover:translation-all duration-500" />
                   </div>
                </div>
          </div>
          {/* photo */}
          <Photo />
        </div>
      </div>
    </section>
  );
}

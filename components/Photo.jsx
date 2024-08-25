"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="relative">
      <motion.div>
        <div className="w-[500px] h-[500px] xl:w-[500px] xl:h-[500px] mix-blend-lighten">
            <Image 
            src="/assets/photo.png" 
            priority  
            quality={100}
            fill
            alt="" className="object-contain"
            />
        </div>
      </motion.div>

    </div>
  )
}

export default Photo
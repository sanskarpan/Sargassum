"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedCharacterProps {
  character: "wizard" | "explorer" | "robot"
}

export default function AnimatedCharacter({ character }: AnimatedCharacterProps) {
  const getCharacterImage = () => {
    switch (character) {
      case "wizard":
        return "/placeholder.jpg?height=200&width=200"
      case "explorer":
        return "/placeholder.jpg?height=200&width=200"
      case "robot":
        return "/placeholder.jpg?height=200&width=200"
      default:
        return "/placeholder.jpg?height=200&width=200"
    }
  }

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg"
    >
      <Image
        src={getCharacterImage() || "/placeholder.jpg"}
        alt={`${character} character`}
        width={200}
        height={200}
        className="object-cover"
      />
    </motion.div>
  )
}

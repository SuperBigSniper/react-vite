import { MotionProps, motion } from 'framer-motion'

export default function Index() {
  const parentVariants: MotionProps['variants'] = {
    initial: {
      backgroundImage: `linear-gradient(-225deg, #5271C4 0%, #B19FFF 10%, #ECA1FE 100%);`,
    },
    animate: {
      backgroundImage: `linear-gradient(-225deg, #ECA1FE 0%, #B19FFF 90%, #5271C4 100%)`,
      transition: {
        repeatType: 'reverse',
        repeat: Infinity,
        ease: 'linear',
        delayChildren: 0.5,
        staggerChildren: 0.2,
        duration: 5,
      }
    },
  }

  const childrenVariants: MotionProps['variants'] = {
    initial: {
      x: -60,
      y: 20,
      opacity: 0,
      filter: 'blur(5px)',
    },
    animate: {
      x: 0,
      y: 0,
      scale: 1.5,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }

  return (
    <motion.h1
      className="h-screen flex justify-center items-center text-6xl"
      initial="initial"
      animate="animate"
      variants={parentVariants}
    >
      {'Hello , world!'.split('').map((v, k) => (
        <motion.span key={k} variants={childrenVariants}>
          {v}
        </motion.span>
      ))}
    </motion.h1>
  )
}

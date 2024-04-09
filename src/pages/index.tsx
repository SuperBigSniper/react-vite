import { MotionProps, motion } from 'framer-motion'

export default function Index() {
  const parentVariants: MotionProps['variants'] = {
    initial: {
      '--bg-color': 0,
    } as any,
    animate: {
      '--bg-color': 250,
    } as any,
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
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.h1
      className="h-screen flex justify-center items-center text-6xl"
      style={{
        backgroundColor: 'rgb(var(--bg-color), 136, 219)',
      }}
      initial="initial"
      animate="animate"
      variants={parentVariants}
      transition={{ staggerChildren: 0.2, duration: 2, when: 'beforeChildren' }}>
      {'Hello , world!'.split('').map((v, k) => (
        <motion.span key={k} variants={childrenVariants}>
          {v}
        </motion.span>
      ))}
    </motion.h1>
  )
}

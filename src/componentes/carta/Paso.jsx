import { AnimatePresence, motion } from 'motion/react'

const variantes = {
  entrada: {
    opacity: 0,
    x: 60,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  salida: {
    opacity: 0,
    x: -60,
    scale: 0.96,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Paso({ idPaso, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={idPaso}
        variants={variantes}
        initial="entrada"
        animate="visible"
        exit="salida"
        className="absolute inset-0 flex items-center justify-center p-6"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

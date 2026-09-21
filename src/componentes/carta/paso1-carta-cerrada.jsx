import { motion } from 'motion/react'

export function PasoCartaCerrada({ onSiguiente }) {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-sm w-full px-4">
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200 p-5 sm:p-6 text-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-amber-800 leading-relaxed text-sm">
          Este es un pequeño detalle digital. Hubiera gustado que sea algo
          presencial, pero espero que de todas formas te guste 💛
        </p>
      </motion.div>

      <motion.div
        className="relative cursor-pointer"
        onClick={onSiguiente}
        onKeyDown={(e) => e.key === 'Enter' && onSiguiente()}
        tabIndex={0}
        role="button"
        aria-label="Abrir carta"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute -inset-4 rounded-2xl bg-amber-300/30 blur-xl"
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
        />

        <motion.div
          className="relative w-48 h-64 sm:w-56 sm:h-72 bg-white rounded-lg shadow-2xl border border-amber-200 flex items-center justify-center"
          whileHover={{ scale: 1.04, rotateY: 8, rotateX: -3 }}
          whileTap={{ scale: 0.96 }}
          animate={{ y: [0, -6, 0, -3, 0], rotate: [-1, 1, -0.5, 0.5, -1] }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <div className="text-center px-4">
            <motion.div
              className="text-4xl mb-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              💌
            </motion.div>
            <p className="text-amber-800 font-medium text-sm">Toca para abrir</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-amber-700/70 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        21 de Septiembre
      </motion.p>
    </div>
  )
}

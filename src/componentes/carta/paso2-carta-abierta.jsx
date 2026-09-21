import { motion } from 'motion/react'

export function PasoCartaAbierta({ onSiguiente }) {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-md w-full px-4">
      <motion.div
        className="w-full bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl border border-amber-200 overflow-hidden"
        initial={{ rotateY: -100, opacity: 0, scale: 0.8 }}
        animate={{ rotateY: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      >
        <div className="h-2 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300" />

        <div className="p-6 sm:p-8 text-center">
          <motion.div
            className="text-4xl sm:text-5xl mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
          >
            🌸
          </motion.div>

          <motion.h2
            className="text-xl sm:text-2xl font-bold text-amber-900 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Hola, esto es para ti
          </motion.h2>

          <motion.p
            className="text-amber-700 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p>Primero, una disculpita de antemano por este atrevimiento.</p>
            La verdad, me hubiera gustado entregarte este detalle en persona, pero como no se 
            pudo decidí hacerlo de esta manera.
            Solo quería que, aunque fuera por un momento, este detalle te sacara una sonrisa 
            y te al,egrara un poquito el día.
            Espero no incomodarte con esto; simplemente me pareció una forma  de decir que tu 
            sonrisa y mirada, son todo lo beautiful de este mundo.
            <p>Feliz 21 de septiembre. 🌼</p>
            espero te gusten estas flores digitales y que algún día poder 
            entregarte unas en persona
          </motion.p>
        </div>
      </motion.div>

      <motion.button
        onClick={onSiguiente}
        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Siguiente →
      </motion.button>
    </div>
  )
}

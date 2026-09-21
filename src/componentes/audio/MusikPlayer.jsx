import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Volume2, VolumeX, Music, ChevronUp, ChevronDown, Play } from 'lucide-react'

export function MusikPlayer({ reproduciendo, volumen, setVolumen, pistaActual, toggle }) {
  const [expandido, setExpandido] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    if (reproduciendo && !hasPlayed) {
      setHasPlayed(true)
    }
  }, [reproduciendo, hasPlayed])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {expandido && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/10 flex flex-col gap-3 min-w-[180px]"
          >
            <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
              <Music size={14} className="text-amber-400" />
              <span className="truncate">{pistaActual}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setVolumen(0)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Silenciar"
              >
                <VolumeX size={16} />
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volumen}
                onChange={(e) => setVolumen(parseFloat(e.target.value))}
                className="flex-1 h-1.5 bg-white/20 rounded-lg appearance-none accent-amber-400 cursor-pointer"
                aria-label="Volumen"
              />

              <button
                onClick={() => setVolumen(1)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Volumen máximo"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {!hasPlayed && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-amber-400 font-bold text-xs sm:text-sm mr-1 sm:mr-2 animate-pulse bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-amber-400/50 shadow-lg flex items-center gap-1.5"
          >
            <span>¡Dale play!</span>
            <span className="text-lg leading-none">➔</span>
          </motion.div>
        )}
        
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl border-2 transition-colors ${
            reproduciendo
              ? 'bg-amber-500/80 border-amber-400/50 text-white'
              : 'bg-black/70 backdrop-blur-md border-amber-400/50 text-amber-400 hover:bg-amber-500/20'
          }`}
          aria-label={reproduciendo ? 'Pausar música' : 'Reproducir música'}
        >
          {reproduciendo ? (
            <div className="flex gap-[3px]">
              <span className="w-[3px] h-3.5 bg-white rounded-full animate-pulse" />
              <span className="w-[3px] h-5 bg-white rounded-full animate-pulse [animation-delay:0.15s]" />
              <span className="w-[3px] h-3 bg-white rounded-full animate-pulse [animation-delay:0.3s]" />
            </div>
          ) : (
            <Play size={22} className="ml-1" fill="currentColor" />
          )}
        </motion.button>

        <motion.button
          onClick={() => setExpandido(!expandido)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-black/70 backdrop-blur-md border border-white/20 text-white/70 hover:text-white transition-colors shadow-lg"
          aria-label={expandido ? 'Cerrar panel de volumen' : 'Abrir panel de volumen'}
        >
          {expandido ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </motion.button>
      </div>
    </div>
  )
}

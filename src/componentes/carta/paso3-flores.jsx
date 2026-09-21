import { motion } from 'motion/react'
import '../dashboard/flores-animadas.css'

export function PasoFlores({ onVolver }) {
  return (
    <div className="absolute inset-0 escena-flores">
      <div className="night" />
      <div className="flowers">
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            <div className="flower__light flower__light--1" />
            <div className="flower__light flower__light--2" />
            <div className="flower__light flower__light--3" />
            <div className="flower__light flower__light--4" />
            <div className="flower__light flower__light--5" />
            <div className="flower__light flower__light--6" />
            <div className="flower__light flower__light--7" />
            <div className="flower__light flower__light--8" />
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
            <div className="flower__line__leaf flower__line__leaf--5" />
            <div className="flower__line__leaf flower__line__leaf--6" />
          </div>
        </div>

        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            <div className="flower__light flower__light--1" />
            <div className="flower__light flower__light--2" />
            <div className="flower__light flower__light--3" />
            <div className="flower__light flower__light--4" />
            <div className="flower__light flower__light--5" />
            <div className="flower__light flower__light--6" />
            <div className="flower__light flower__light--7" />
            <div className="flower__light flower__light--8" />
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
          </div>
        </div>

        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1" />
            <div className="flower__leaf flower__leaf--2" />
            <div className="flower__leaf flower__leaf--3" />
            <div className="flower__leaf flower__leaf--4" />
            <div className="flower__white-circle" />
            <div className="flower__light flower__light--1" />
            <div className="flower__light flower__light--2" />
            <div className="flower__light flower__light--3" />
            <div className="flower__light flower__light--4" />
            <div className="flower__light flower__light--5" />
            <div className="flower__light flower__light--6" />
            <div className="flower__light flower__light--7" />
            <div className="flower__light flower__light--8" />
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1" />
            <div className="flower__line__leaf flower__line__leaf--2" />
            <div className="flower__line__leaf flower__line__leaf--3" />
            <div className="flower__line__leaf flower__line__leaf--4" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top" />
            <div className="flower__grass--bottom" />
            <div className="flower__grass__leaf flower__grass__leaf--1" />
            <div className="flower__grass__leaf flower__grass__leaf--2" />
            <div className="flower__grass__leaf flower__grass__leaf--3" />
            <div className="flower__grass__leaf flower__grass__leaf--4" />
            <div className="flower__grass__leaf flower__grass__leaf--5" />
            <div className="flower__grass__leaf flower__grass__leaf--6" />
            <div className="flower__grass__leaf flower__grass__leaf--7" />
            <div className="flower__grass__leaf flower__grass__leaf--8" />
            <div className="flower__grass__overlay" />
          </div>
        </div>

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top" />
            <div className="flower__grass--bottom" />
            <div className="flower__grass__leaf flower__grass__leaf--1" />
            <div className="flower__grass__leaf flower__grass__leaf--2" />
            <div className="flower__grass__leaf flower__grass__leaf--3" />
            <div className="flower__grass__leaf flower__grass__leaf--4" />
            <div className="flower__grass__leaf flower__grass__leaf--5" />
            <div className="flower__grass__leaf flower__grass__leaf--6" />
            <div className="flower__grass__leaf flower__grass__leaf--7" />
            <div className="flower__grass__leaf flower__grass__leaf--8" />
            <div className="flower__grass__overlay" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.4s' }}>
          <div className="flower__g-right flower__g-right--1"><div className="leaf" /></div>
        </div>
        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-right flower__g-right--2"><div className="leaf" /></div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${n}`}>
                <div className="flower__g-front__leaf" />
              </div>
            ))}
            <div className="flower__g-front__line" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf" />
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className={`flower__g-fr__leaf flower__g-fr__leaf--${n}`} />
            ))}
          </div>
        </div>

        {[0,1,2,3,4,5,6,7].map(n => (
          <div key={n} className={`long-g long-g--${n}`}>
            <div className="grow-ans" style={{ '--d': `${2.2 + n * 0.2}s` }}><div className="leaf leaf--0" /></div>
            <div className="grow-ans" style={{ '--d': `${2.4 + n * 0.2}s` }}><div className="leaf leaf--1" /></div>
            <div className="grow-ans" style={{ '--d': `${2.6 + n * 0.2}s` }}><div className="leaf leaf--2" /></div>
            <div className="grow-ans" style={{ '--d': `${2.8 + n * 0.2}s` }}><div className="leaf leaf--3" /></div>
          </div>
        ))}
      </div>

      {/* Botón volver — aparece después de que las flores crecen */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
      >
        <motion.button
          onClick={onVolver}
          className="px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-full shadow-lg border border-white/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Volver al inicio
        </motion.button>
      </motion.div>
    </div>
  )
}

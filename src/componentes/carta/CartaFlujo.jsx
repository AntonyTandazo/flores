import { Paso } from './Paso'
import { PasoCartaCerrada } from './paso1-carta-cerrada'
import { PasoCartaAbierta } from './paso2-carta-abierta'
import { PasoFlores } from './paso3-flores'

export function CartaFlujo({ paso, setPaso, iniciarMusica }) {
  const siguiente = () => {
    if (paso === 1 && iniciarMusica) {
      iniciarMusica()
    }
    setPaso((p) => Math.min(p + 1, 3))
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Paso idPaso={paso}>
        {paso === 1 && <PasoCartaCerrada onSiguiente={siguiente} />}
        {paso === 2 && <PasoCartaAbierta onSiguiente={siguiente} />}
        {paso === 3 && <PasoFlores onVolver={() => setPaso(1)} />}
      </Paso>
    </div>
  )
}

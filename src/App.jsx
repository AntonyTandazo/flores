import { useState } from 'react'
import { CartaFlujo } from './componentes/carta/CartaFlujo'
import { MusikPlayer } from './componentes/audio/MusikPlayer'
import { useMusica } from './componentes/audio/useMusica'

function App() {
  const [paso, setPaso] = useState(1)
  const musica = useMusica()

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <CartaFlujo paso={paso} setPaso={setPaso} iniciarMusica={musica.reproducir} />
      <MusikPlayer {...musica} />
    </div>
  )
}

export default App

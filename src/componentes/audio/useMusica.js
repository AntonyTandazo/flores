import { useState, useEffect, useRef, useCallback } from 'react'
import { Howl } from 'howler'

const TRACKS = [
  { id: 1, src: '/music/Sonrrisas.mp3', label: 'Sonrrisas' },
  { id: 2, src: '/music/quien-eres.mp3', label: 'Quien eres' },
  { id: 3, src: '/music/juanes-me-enamora.mp3', label: 'Juanes Me Enamora' },
]

export function useMusica() {
  const [reproduciendo, setReproduciendo] = useState(false)
  const [volumen, setVolumen] = useState(0.3)
  const [pistaActual, setPistaActual] = useState(0)
  
  const currentHowlRef = useRef(null)

  useEffect(() => {
    if (currentHowlRef.current) {
      currentHowlRef.current.unload()
    }

    const t = TRACKS[pistaActual]
    
    const h = new Howl({
      src: [t.src],
      html5: true,
      volume: volumen,
      // Solo hacer autoplay si ya estábamos reproduciendo (cambio de pista)
      autoplay: reproduciendo, 
      onplay: () => setReproduciendo(true),
      onpause: () => setReproduciendo(false),
      onstop: () => setReproduciendo(false),
      onend: () => {
        setPistaActual((prev) => (prev + 1) % TRACKS.length)
      }
    })

    currentHowlRef.current = h

    return () => {
      h.unload()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pistaActual])

  useEffect(() => {
    if (currentHowlRef.current) {
      currentHowlRef.current.volume(volumen)
    }
  }, [volumen])

  const reproducir = useCallback(() => {
    if (currentHowlRef.current && !currentHowlRef.current.playing()) {
      currentHowlRef.current.play()
    }
  }, [])

  const pausar = useCallback(() => {
    if (currentHowlRef.current) {
      currentHowlRef.current.pause()
    }
  }, [])

  const toggle = useCallback(() => {
    if (reproduciendo) {
      pausar()
    } else {
      reproducir()
    }
  }, [reproduciendo, reproducir, pausar])

  return {
    reproduciendo,
    volumen,
    setVolumen,
    pistaActual: TRACKS[pistaActual]?.label ?? '',
    toggle,
    reproducir,
    pausar,
  }
}

import { useState, useEffect, useRef, useCallback } from 'react'
import { Howl } from 'howler'

const TRACKS = [
  { id: 1, src: import.meta.env.BASE_URL + 'music/Sonrrisas.mp3', label: 'Sonrrisas' },
  { id: 2, src: import.meta.env.BASE_URL + 'music/quien-eres.mp3', label: 'Quien eres' },
  { id: 3, src: import.meta.env.BASE_URL + 'music/juanes-me-enamora.mp3', label: 'Juanes Me Enamora' },
]

const FADE_MS = 1000

export function useMusica(paso) {
  const [reproduciendo, setReproduciendo] = useState(false)
  const [volumen, setVolumen] = useState(0.3)
  const howlRef = useRef(null)
  const prevHowlRef = useRef(null)
  const initializedRef = useRef(false)
  const trackIdxRef = useRef(0)

  useEffect(() => {
    return () => {
      if (howlRef.current) { howlRef.current.stop(); howlRef.current.unload() }
      if (prevHowlRef.current) { prevHowlRef.current.stop(); prevHowlRef.current.unload() }
    }
  }, [])

  const crearHowl = useCallback((idx) => {
    return new Howl({
      src: [TRACKS[idx].src],
      html5: true,
      loop: true,
      volume: 0,
    })
  }, [])

  const reproducir = useCallback(() => {
    if (howlRef.current && howlRef.current.playing()) return

    const idx = trackIdxRef.current
    const h = crearHowl(idx)
    h.volume(volumen)
    h.play()
    howlRef.current = h

    setReproduciendo(true)
    initializedRef.current = true
  }, [volumen, crearHowl])

  const pausar = useCallback(() => {
    if (howlRef.current) {
      howlRef.current.pause()
    }
    setReproduciendo(false)
  }, [])

  const toggle = useCallback(() => {
    if (reproduciendo) {
      pausar()
    } else {
      reproducir()
    }
  }, [reproduciendo, reproducir, pausar])

  useEffect(() => {
    const idx = Math.max(0, Math.min(paso - 1, TRACKS.length - 1))
    if (idx === trackIdxRef.current && howlRef.current) return

    const wasPlaying = initializedRef.current && howlRef.current && howlRef.current.playing()
    trackIdxRef.current = idx

    if (!initializedRef.current) return

    const viejo = howlRef.current
    if (viejo && viejo.playing()) {
      viejo.fade(viejo.volume(), 0, FADE_MS)
      prevHowlRef.current = viejo
      setTimeout(() => {
        if (prevHowlRef.current === viejo) {
          viejo.stop()
          viejo.unload()
          prevHowlRef.current = null
        }
      }, FADE_MS + 100)
    } else if (viejo) {
      viejo.stop()
      viejo.unload()
    }

    const nuevo = crearHowl(idx)
    nuevo.volume(0)
    if (wasPlaying) nuevo.play()
    nuevo.fade(0, volumen, wasPlaying ? FADE_MS : 0)
    howlRef.current = nuevo
  }, [paso, volumen, crearHowl])

  return {
    reproduciendo,
    volumen,
    setVolumen,
    pistaActual: TRACKS[trackIdxRef.current]?.label ?? '',
    toggle,
    reproducir,
    pausar,
  }
}

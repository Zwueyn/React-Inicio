import { useState, useEffect } from 'react'

export const FollowMouse = () => {

    const [enabled, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      const handleMove = (event) => {
        const { clientX, clientY } = event
        setPosition({ x: clientX, y: clientY })
      }
  
      if (enabled) {
        window.addEventListener('pointermove', handleMove)
      }
  
      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    }, [enabled])
  
    return (
      <>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(50, 25, 25, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}/>
        <button onClick={() => setEnable(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} Seguir puntero
        </button>
      </>
    )
  }
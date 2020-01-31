import React, { useState, useEffect} from 'react'
import '../public/style/components/nes.css'

const NesAsh = (props) => {
  const [left, setLeft] = useState('-70')
  useEffect(() => {
    let Timer = setInterval(() => {
      if(left < props.width) {
        let newLeft = left * 1 + 10
        setLeft(newLeft)
      } else {
        setLeft('-70')
      }
    }, 250)
    return () => {
      clearInterval(Timer)
    }
  }, [left])
  return (
    <div style={{ width: props.width - 16, height: '100px', position: 'relative', left: '-1.5rem', overflow: 'hidden'}}>
      <i style={{ left: left + 'px'}} className="nes-ash nes-ash-animate"></i>
    </div>
  )
}

export default NesAsh

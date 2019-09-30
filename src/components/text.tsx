import React, { useState } from 'react'

const text = 'TEST COMPONENT'

export const Text: React.SFC<{}> = () => {

  const [showText, setShowText] = useState(true)

  const toggleText = () => setShowText(!showText)

  return (
    <div>
      <button onClick={toggleText}>Toggle text</button>
      {showText && text}
    </div>
  )
}

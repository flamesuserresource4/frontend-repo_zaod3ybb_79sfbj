import { createContext, useContext, useMemo, useState } from 'react'

const ThreeSceneContext = createContext({ performance: 'high' })

export const ThreeSceneProvider = ({ children }) => {
  const [performance] = useState(() => {
    // simple heuristic for mobile/low-power
    const isLow = typeof navigator !== 'undefined' && /mobi|android/i.test(navigator.userAgent)
    return isLow ? 'low' : 'high'
  })

  const value = useMemo(() => ({ performance }), [performance])
  return <ThreeSceneContext.Provider value={value}>{children}</ThreeSceneContext.Provider>
}

export const useThreePerf = () => useContext(ThreeSceneContext)

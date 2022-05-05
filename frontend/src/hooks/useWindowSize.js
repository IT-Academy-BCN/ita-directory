import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0])
  useEffect(() => {
    const getNewSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', getNewSize)
    getNewSize()
    return () => window.removeEventListener('resize', getNewSize)
  }, [])
  return windowSize
}
export default useWindowSize

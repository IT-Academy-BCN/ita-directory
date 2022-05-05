const parentPosition = (id) => {
  const elem = document.getElementById(id)
  const rect = elem.getBoundingClientRect()
  return { x: rect.x, y: rect.y, height: rect.height, width: rect.width }
}
export default parentPosition

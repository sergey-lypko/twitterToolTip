export default function createToolTip({ selectionRect, idDOM, classDOM }) {
  const toolTip = document.createElement('div')

  toolTip.setAttribute("id", idDOM)
  toolTip.setAttribute("class", classDOM)

  toolTip.style.top = (selectionRect.top - 53) + 'px'
  toolTip.style.left = (selectionRect.left - 1) + 'px'

  const loader = document.createElement("div")

  loader.setAttribute("id", 'tool_tip_loader')
  loader.setAttribute("class", 'tool-tip-loader')
  toolTip.appendChild(loader)

  for (let i = 0; i < 3; i++) {
    const el = document.createElement('div')
    el.setAttribute('class', `loader-dot loader-dot-${i}`)
    loader.appendChild(el)
  }

  return toolTip
}

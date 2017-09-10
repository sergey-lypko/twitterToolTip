export default function createToolTip(selectionReact, _id, _className) {
  const toolTip = document.createElement('div')

  toolTip.setAttribute("id", _id)
  toolTip.setAttribute("class", _className)

  toolTip.style.border = '1px solid black'
  toolTip.style.position = 'fixed'
  toolTip.style.top = selectionReact.top + 'px'
  toolTip.style.left = selectionReact.left + 'px'
  toolTip.style.height = selectionReact.height + 'px'
  toolTip.style.width = 100 + 'px'

  return toolTip
}

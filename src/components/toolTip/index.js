export default function createToolTip({ selectionRect, idDOM, classDOM }) {
  const toolTip = document.createElement('div')

  toolTip.setAttribute("id", idDOM)
  toolTip.setAttribute("class", classDOM)

  console.log(selectionRect.width);

  toolTip.style.top = (selectionRect.top - 53) + 'px'
  toolTip.style.left = (selectionRect.left - 1) + 'px'

  return toolTip
}

import createToolTip from './toolTip'
import removeElementsByClassName from './utils/removeElementsByClassName'


let t = ''

// TODO rename and compose with utils/makeToolTip funcs 
function gText(e) {
  removeElementsByClassName('tool-tip')

  t = (document.all) ? document.selection.createRange().text : document.getSelection()
  document.getElementById('input').value = t

  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()

  if (selection.anchorOffset !== selection.focusOffset) {
    const toolTip = createToolTip(rect, 'twitter_tool_tip', 'tool-tip')
    document.body.appendChild(toolTip)
  }

}

document.onmouseup = gText
if (!document.all) {
  document.captureEvents(Event.MOUSEUP)
}

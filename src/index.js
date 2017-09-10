import createToolTip from './components/toolTip'
import injectTwitterButton from './components/twitterButton'
import removeElementsByClassName from './utils/removeElementsByClassName'

// TODO publish somewhere in heroku and run via local host (for develop)

function init(e) {
  removeElementsByClassName('tool-tip')

  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()

  const toolTip = createToolTip(rect, 'twitter_tool_tip', 'tool-tip')

  if (selection.anchorOffset !== selection.focusOffset) {
    if (selection.toString().length < 140) {
      document.body.appendChild(toolTip)
      injectTwitterButton('twitter_tool_tip', selection.toString())
    }
  }
}

// TODO investigate another implementation (via listeners or something)
document.onmouseup = init
if (!document.all) {
  document.captureEvents(Event.MOUSEUP)
}

import createToolTip from './components/toolTip'
import injectTwitterButton from './components/twitterButton'
import removeElementsByClassName from './utils/removeElementsByClassName'

// TODO publish somewhere in heroku and run via local host (for develop)

document.body.onmousedown = function(e) {
  if (e.target.id !== 'twitter_tool_tip') {
    removeElementsByClassName('tool-tip')
  }
}

// TODO refactor with passing element and class names
function showSpinner() {
  const loader = document.getElementById('tool_tip_loader')
  loader.className += ' spinner-visible'
}

function hideSpinner() {
  const loader = document.getElementById('tool_tip_loader')
  loader.className += 'tool-tip-loader'
}

function init(e) {
  const selection = window.getSelection()
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()

  const toolTip = createToolTip({
    selectionRect: rect,
    idDOM: 'twitter_tool_tip',
    classDOM: 'tool-tip',
  })

  if (selection.anchorOffset !== selection.focusOffset) {
    const { length } = selection.toString()

    if (length < 140 && length !== 0) {
      document.body.appendChild(toolTip)
      showSpinner()

      injectTwitterButton({
        idDOM: 'twitter_tool_tip',
        prePopulatedText: selection.toString()
      }).then(() => {
        hideSpinner()
      })
    }
  }
}

// TODO investigate another implementation (via listeners or something)
document.onmouseup = init
if (!document.all) {
  document.captureEvents(Event.MOUSEUP)
}

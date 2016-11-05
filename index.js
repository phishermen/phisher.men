const app = require('./src/app')
const yo = require('yo-yo')

const mainEl = document.getElementById('main')
if (mainEl == null) {
  document.body.appendChild(yo`<div id="main"></div>`)
}

app(false).start('#main')
